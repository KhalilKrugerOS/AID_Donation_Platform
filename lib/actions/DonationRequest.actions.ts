"use server";

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Post from "../database/models/post.model";

export const createDonationRequest = async ({ RequestInfo, userId, path }: CreateEventParams) => {
    try {
        await connectToDatabase();
        console.log("userId : ", userId);
        const Fundraiser = await User.findById(userId);
        console.log("Fundraiser : \n\n\n")
        console.log(Fundraiser)
        if (!Fundraiser)
            throw new Error("***That User was not found***\n");

        const newRequest = await Post.create({
            ...RequestInfo,
            category: RequestInfo.categoryId,
            Fundraiser_organisation: Fundraiser._id,

        });
        console.log("new requst is be\n\n\n")
        console.log(newRequest)
        return JSON.parse(JSON.stringify(newRequest));
    } catch (error) {
        handleError(error)
    }

}