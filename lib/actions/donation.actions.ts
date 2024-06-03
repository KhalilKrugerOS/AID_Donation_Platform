"use server";


import { CheckoutOrderParams, CreateDonationParams, GetDonationsByRequestParams, GetOrdersByUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import { ObjectId } from "mongodb";
import Post from "../database/models/post.model";
import donation, { IDonation } from "../database/models/donation.model";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import Donation from "../database/models/donation.model";
import User from "../database/models/user.model";

export const checkoutDonation = async (donation: CheckoutOrderParams) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const amountNeeded = Number(donation.amountNeeded) * 100;

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: amountNeeded,
                        product_data: {
                            name: donation.postTitle
                        }
                    },
                    quantity: 1
                },
            ],
            metadata: {
                postId: donation.postId,
                donatorId: donation.donatorId,
            },
            mode: 'payment',
            // TODO: check redirection
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/Profil/`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
        });

        redirect(session.url!)
    } catch (error) {
        throw error;
    }
}

export const createDonation = async (donation: CreateDonationParams) => {
    console.log('the donation you provieded : \n');
    console.log(donation);
    console.log("plus" + donation.postId + "and" + donation.donatorId);
    try {
        await connectToDatabase();

        const newDonation = await Donation.create({
            ...donation,
            post: donation.postId,
            donator: donation.donatorId,
        });
        console.log("the new donation is ");
        console.log(newDonation);
        console.log("\n\n")

        return JSON.parse(JSON.stringify(newDonation));
    } catch (error) {
        handleError(error);
    }
}

// GET ORDERS BY EVENT
export async function getDonationsByRequest({ searchString, postId }: GetDonationsByRequestParams) {
    try {
        await connectToDatabase()

        if (!postId) throw new Error('Event ID is required')
        const postObjectId = new ObjectId(postId)

        const donations = await donation.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'donator',
                    foreignField: '_id',
                    as: 'donator',
                },
            },
            {
                $unwind: '$donator',
            },
            {
                $lookup: {
                    from: 'posts',
                    localField: 'post',
                    foreignField: '_id',
                    as: 'post',
                },
            },
            {
                $unwind: '$post',
            },
            {
                $project: {
                    _id: 1,
                    neededAmount: 1,
                    createdAt: 1,
                    postTitle: '$post.title',
                    postId: '$post._id',
                    donator: {
                        $concat: ['$donator.firstName', ' ', '$donator.lastName'],
                    },
                },
            },
            {
                $match: {
                    $and: [{ postId: postObjectId }, { donator: { $regex: RegExp(searchString, 'i') } }],
                },
            },
        ])

        return JSON.parse(JSON.stringify(donations))
    } catch (error) {
        handleError(error)
    }
}

// GET donations that a user has donated to
export async function getDonationsByUser({ userId, limit = 3, page }: GetOrdersByUserParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { donator: userId }
        const donations: IDonation[] = await Donation.distinct('post._id')
            .find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)
            .populate({
                path: 'post',
                model: Post,
                populate: {
                    path: 'Fundraiser_organisation',
                    model: User,
                    select: '_id firstName lastName',
                },
            });

        const DonationsCount = await donation.distinct('post._id').countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(donations)), totalPages: Math.ceil(DonationsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}
