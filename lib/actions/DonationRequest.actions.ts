"use server";

import { CreateEventParams, GetAllEventsParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Post from "../database/models/post.model";
import Category from "../database/models/category.model";
const PopulateRequest = (query: any) => {
    return query
        .populate({ path: 'Fundraiser_organisation', model: User, select: '_id firstName lastName photo' })
        .populate({ path: 'category', model: Category, select: '_id name' })
}

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

export const getDonationRequestById = async (reqId: string) => {
    try {
        await connectToDatabase();
        const donationRequest = await PopulateRequest(Post.findById(reqId));
        console.log("fetched request is : " + donationRequest)
        if (!donationRequest)
            return new Error("***That Donation Request was not found***\n\n");

        return JSON.parse(JSON.stringify(donationRequest));

    } catch (error) {
        handleError(error)
    }


}

export const getAllDonationRequests = async ({ query, limit = 6, page, category }: GetAllEventsParams) => {
    try {
        await connectToDatabase();
        const conditions = {};
        const donationRequestsquery = await Post.find(conditions)
            .sort({ createdAt: "desc" })
            .skip((page - 1) * limit)
            .limit(limit)
            .populate({ path: 'Fundraiser_organisation', model: User, select: '_id firstName lastName photo' })
            .populate({ path: 'category', model: Category, select: '_id name' }).exec();


        console.log("fetched posts before populate: " + donationRequestsquery);

        //const donationRequests = donationRequestsquery.populate({ path: 'Fundraiser_organisation', model: User, select: '_id firstName lastName photo' }).return new Promise((resolve, reject) => {



        const donationRequestsCount = await Post.countDocuments(conditions);
        console.log("donationRequestsCount : ", donationRequestsCount);
        return {
            totalPages: Math.ceil(donationRequestsCount / limit),
            data: JSON.parse(JSON.stringify(donationRequestsquery)),
        }
    } catch (error) {
        handleError(error)
    }
}