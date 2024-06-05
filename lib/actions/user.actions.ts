"use server";

import {
  CreateUserParams,
  UpdateUserParams,
  UpdateUserParamsEdit,
  GetAllUsersParams,
} from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "@/lib/database/models/user.model";
import Post from "@/lib/database/models/post.model";
import Donation from "@/lib/database/models/donation.model";
import { revalidatePath } from "next/cache";

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
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    const totalPosts = await Post.countDocuments({
      Fundraiser_organisation: user._id,
    });
    const totalDonations = await Donation.countDocuments({ donator: user._id });

    return {
      user: JSON.parse(JSON.stringify(user)),
      totalPosts,
      totalDonations,
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
    const query: {} = {};
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
