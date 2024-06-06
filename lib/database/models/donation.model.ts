import { Schema, model, models, Document } from "mongoose";

export interface IDonation extends Document {
  createdAt: Date;
  stripeId: string;
  amountDonated: string;
  post: {
    _id: string;
    title: string;
  };
  Donator: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

export type IDonationItem = {
  _id: string;
  amountDonated: string;
  createdAt: Date;
  PostTitle: string;
  PostId: string;
  Donator: string;
};

const DonationSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amountDonated: {
    type: Number,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  donator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Donation = models.Donation || model("Donation", DonationSchema);

export default Donation;
