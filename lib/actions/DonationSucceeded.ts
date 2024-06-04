"use server";

//import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Donation from "../database/models/donation.model";

// ====== Donation params
export type UpdateDonationParams ={
    createdAt: Date;
    stripeId: string;
    totalAmount: string;
    event: {
      _id: string;
      title: string;
    };
    Donator: {
      _id: string;
      firstName: string;
      lastName: string;
    };
  }
  export const createDonationFromResponse = async (res: any): Promise<UpdateDonationParams> => {
    try {
      await connectToDatabase();
      const Donator = await User.findOne({ email: res.email });
      if (!Donator) {
        throw new Error("***That User was not found***\n");
      }
      const date: Date = new Date();
      return {
        createdAt: date,
        stripeId: res?.data?.object?.id.toString(),
        totalAmount: (res?.data?.object?.amount / 100).toString(),
        event: {
          _id: res?.id.toString(),
          title: res?.type.toString(),
        },
        Donator: {
          _id: Donator.clerkId.toString(),
          firstName: Donator.firstname,
          lastName: Donator.lastname,
        },
      };
    } catch (error) {
      handleError(error);
      throw error; // Rethrow the error after handling
    }
  };
export const DonationSucceeded = async ( DonationParams : UpdateDonationParams) => {
    try {
      await connectToDatabase();
      const newDonation = await Donation.create(DonationParams);
      console.log("donation added to database successfully");
      return JSON.parse(JSON.stringify(newDonation));
    } catch (error) {
      handleError(error);
    }
  };