"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "@/lib/database/models/user.model";
import Post from "@/lib/database/models/post.model";
import Donation from "@/lib/database/models/donation.model";
import { revalidatePath } from "next/cache";
import {
  GetUserByIdParams,
  GetUserStatsParams,
} from "@/lib/actions/shared.types";

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
    return JSON.parse(JSON.stringify(user));
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

export async function getUserInfo(params: GetUserByIdParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("❌🔍 User not found 🔍❌");
    }

    const userOutput = {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      password: user.password, // Note: It's not recommended to store passwords in plain text. Consider using a secure password hashing algorithm.
      phoneNumber: user.phoneNumber,
      bio: user.bio,
      picture: user.picture,
      location: user.location,
      socialMediaLink: user.socialMediaLink,
      reputation: user.reputation,
      saved: user.saved,
      joinedAt: user.joinedAt,
    };

    return userOutput;
  } catch (error) {
    console.error(error);
  }
}
