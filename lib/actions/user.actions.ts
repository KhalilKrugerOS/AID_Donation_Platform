"use server";

import {
  CreateUserParams,
  UpdateUserParams,
  UpdateUserParamsEdit,
  GetAllUsersParams,
} from "@/types";
import { connectToDatabase } from "../database";
import { BadgeCounts, assignBadges, handleError } from "../utils";
import User from "@/lib/database/models/user.model";
import Post from "@/lib/database/models/post.model";
import Donation from "@/lib/database/models/donation.model";
import { revalidatePath } from "next/cache";
import { AnyARecord } from "dns";
import { BadgeCriteria, BadgeCriteriaType } from "@/types/index.d";
import { BADGE_CRITERIA } from "@/constants/constants";
import console from "console";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export async function getUserById(userId: string) {
  try {
    connectToDatabase(); // Assuming this function establishes the database connection

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    // Fetch user's donation-related statistics
    const totalDonations = await Donation.countDocuments({ donator: user._id });
    const totalAmountDonatedResult = await Donation.aggregate([
      { $match: { donator: user._id } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amountDonated" },
        },
      },
      {
        $project: {
          _id: 0,
          totalAmount: "$totalAmount",
        },
      },
    ]);
    const totalAmountDonated =
      totalAmountDonatedResult.length > 0
        ? totalAmountDonatedResult[0].totalAmount
        : 0;

    console.log("totalAmountDonatedResult:", totalAmountDonatedResult);
    console.log("totalAmountDonated:", totalAmountDonated);

    // Get all category names of posts the user has donated to
    const donatedCategoriesResult = await Donation.aggregate([
      { $match: { donator: user._id } },
      {
        $lookup: {
          from: "posts",
          localField: "post",
          foreignField: "_id",
          as: "postDetails",
        },
      },
      { $unwind: "$postDetails" },
      {
        $lookup: {
          from: "categories",
          localField: "postDetails.category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      { $unwind: "$categoryDetails" },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: { $first: "$categoryDetails.name" },
        },
      },
      {
        $project: {
          _id: 0,
          categoryName: 1,
        },
      },
    ]);

    const donatedCategories = donatedCategoriesResult.map(
      (c) => c.categoryName
    );
    console.log("donatedCategories:", donatedCategories);

    console.log("Donated categories:", donatedCategories);

    const specificCampaignCriteria: BadgeCriteria[] = donatedCategories
      .map((category) => {
        const campaignName = Object.keys(BADGE_CRITERIA.SPECIFIC_CAMPAIGN).find(
          (key) => {
            const campaignKey = key.toLowerCase();
            const categoryLower = category.toLowerCase();
            console.log(
              `Comparing category "${categoryLower}" with campaign "${campaignKey}"`
            );
            return campaignKey === categoryLower;
          }
        ) as keyof typeof BADGE_CRITERIA.SPECIFIC_CAMPAIGN | undefined;

        if (campaignName) {
          console.log(
            `Category "${category.toLowerCase()}" matches campaign "${campaignName}". Adding to specificCampaignCriteria.`
          );
          return {
            type: "SPECIFIC_CAMPAIGN",
            campaigns: [campaignName],
          } as BadgeCriteria;
        }
        console.log(
          `Category "${category.toLowerCase()}" does not match any campaign.`
        );
        return null;
      })
      .filter(Boolean) as BadgeCriteria[];

    console.log("Specific campaign criteria:", specificCampaignCriteria);

    const criteria: BadgeCriteria[] = [
      {
        type: "TOTAL_DONATION_AMOUNT",
        count: totalAmountDonated,
      },
      {
        type: "NUMBER_OF_DONATIONS",
        count: totalDonations,
      },
      ...specificCampaignCriteria,
      // Add more criteria if needed
    ];

    console.log("All criteria:", criteria);

    const badges = assignBadges({
      criteria: criteria.map((c) =>
        c.type === "SPECIFIC_CAMPAIGN" ? { ...c, count: 0 } : c
      ),
    });

    console.log("Badges:", badges);
    return {
      user: JSON.parse(JSON.stringify(user)),
      totalDonations,
      totalAmountDonated,
      donatedCategories,
      badges,
    };
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUserEdit(params: UpdateUserParamsEdit) {
  try {
    await connectToDatabase();

    const { clerkId, updateData, path } = params;

    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error(`User with clerkId ${clerkId} not found`);
    }

    revalidatePath(path);
  } catch (error) {
    console.error(`Error updating user: ${error}`);
    throw error;
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Unlink relationships
    await Promise.all([
      // Update the 'posts' collection to remove references to the user
      Post.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organization: userToDelete._id } }
      ),

      // Update the 'donations' collection to remove references to the user
      Donation.updateMany(
        { _id: { $in: userToDelete.orders } },
        { $unset: { Donator: 1 } }
      ),
    ]);

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    await connectToDatabase();

    const { page = 1, pageSize = 20, filter, searchQuery } = params;

    // Construct the query object
    const query: any = {};
    if (searchQuery) {
      query.$or = [
        { name: { $regex: searchQuery, $options: "i" } },
        { email: { $regex: searchQuery, $options: "i" } },
      ];
    }

    let sortOptions = {};

    switch (filter) {
      case "new_users":
        sortOptions = { joinedAt: -1 };
        break;
      case "old_users":
        sortOptions = { joinedAt: 1 };
        break;
      default:
        break;
    }

    const users = await User.find(query)
      .sort(sortOptions)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    const totalUsers = await User.countDocuments(query);
    const isNext = totalUsers > page * pageSize;

    return { users, isNext, totalUsers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
