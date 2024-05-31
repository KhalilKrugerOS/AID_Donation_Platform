"use server";
import { CheckoutOrderParams, CreateOrderParams, GetOrdersByEventParams, GetOrdersByUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import { ObjectId } from "mongodb";
import { User } from "lucide-react";
import Post from "../database/models/post.model";
import donation from "../database/models/donation.model";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import Donation from "../database/models/donation.model";

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
            success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/${donation.donatorId}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
        });

        redirect(session.url!)
    } catch (error) {
        throw error;
    }
}

export const createDonation = async (donation: CreateOrderParams) => {
    try {
        await connectToDatabase();

        const newDonation = await Donation.create({
            ...donation,
            post: donation.postId,
            donator: donation.donatorId,
        });

        return JSON.parse(JSON.stringify(newDonation));
    } catch (error) {
        handleError(error);
    }
}

// GET ORDERS BY EVENT
export async function getOrdersByEvent({ searchString, eventId }: GetOrdersByEventParams) {
    try {
        await connectToDatabase()

        if (!eventId) throw new Error('Event ID is required')
        const eventObjectId = new ObjectId(eventId)

        const donations = await donation.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'buyer',
                    foreignField: '_id',
                    as: 'buyer',
                },
            },
            {
                $unwind: '$buyer',
            },
            {
                $lookup: {
                    from: 'events',
                    localField: 'event',
                    foreignField: '_id',
                    as: 'event',
                },
            },
            {
                $unwind: '$event',
            },
            {
                $project: {
                    _id: 1,
                    totalAmount: 1,
                    createdAt: 1,
                    eventTitle: '$event.title',
                    eventId: '$event._id',
                    buyer: {
                        $concat: ['$buyer.firstName', ' ', '$buyer.lastName'],
                    },
                },
            },
            {
                $match: {
                    $and: [{ eventId: eventObjectId }, { buyer: { $regex: RegExp(searchString, 'i') } }],
                },
            },
        ])

        return JSON.parse(JSON.stringify(donations))
    } catch (error) {
        handleError(error)
    }
}

// GET DonationS BY USER
// export async function getDonationsByUser({ userId, limit = 3, page }: GetOrdersByUserParams) {
//     try {
//         await connectToDatabase()

//         const skipAmount = (Number(page) - 1) * limit
//         const conditions = { buyer: userId }

//         const Donations = await Donation.distinct('event._id')
//             .find(conditions)
//             .sort({ createdAt: 'desc' })
//             .skip(skipAmount)
//             .limit(limit)
//             .populate({
//                 path: 'Post',
//                 model: Post,
//                 populate: {
//                     path: '',
//                     model: User,
//                     select: '_id firstName lastName',
//                 },
//             });

//         const DonationsCount = await donation.distinct('event._id').countDocuments(conditions)

//         return { data: JSON.parse(JSON.stringify(Donations)), totalPages: Math.ceil(DonationsCount / limit) }
//     } catch (error) {
//         handleError(error)
//     }
// }
