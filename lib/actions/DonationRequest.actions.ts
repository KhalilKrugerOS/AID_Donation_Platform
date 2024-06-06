"use server";
import { revalidatePath } from 'next/cache'
import { CreateEventParams, DeleteEventParams, GetAllEventsParams, GetEventsByUserParams, GetRelatedEventsByCategoryParams, UpdateEventParams } from "@/types";
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


// DELETE
export async function deletDonationRequest({ postId, path }: DeleteEventParams) {
    try {
        await connectToDatabase()

        const deletedEvent = await Post.findByIdAndDelete(postId)
        if (deletedEvent) revalidatePath(path)
    } catch (error) {
        handleError(error)
    }
}


// UPDATE
export async function updateDonationRequest({ userId, post, path }: UpdateEventParams) {
    try {
        await connectToDatabase()

        const PostToUpdate = await Post.findById(post._id)
        if (!PostToUpdate || PostToUpdate.Fundraiser_organisation.toHexString() !== userId) {
            throw new Error('Unauthorized or event not found')
        }

        const updatedPost = await Post.findByIdAndUpdate(
            post._id,
            { ...post, category: post.categoryId },
            { new: true }
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedPost))
    } catch (error) {
        handleError(error)
    }
}



// GET EVENTS BY ORGANIZER
export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
    try {
        await connectToDatabase()

        const conditions = { Fundraiser_organisation: userId }
        const skipAmount = (page - 1) * limit

        const postsQuery = Post.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const posts = await PopulateRequest(postsQuery)
        const postsCount = await Post.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(posts)), totalPages: Math.ceil(postsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}

// GET RELATED posts: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
    categoryId,
    postId,
    limit = 3,
    page = 1,
}: GetRelatedEventsByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { $and: [{ category: categoryId }, { _id: { $ne: postId } }] }

        const postsQuery = Post.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const posts = await PopulateRequest(postsQuery)
        const postsCount = await Post.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(posts)), totalPages: Math.ceil(postsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}