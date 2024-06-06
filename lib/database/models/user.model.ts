// import { PhoneNumber } from "@clerk/nextjs/dist/types/server";
import { Schema, models, model, Document } from "mongoose";

/**
 * why extend Document?
 * This means that it's going to get some properties as well,
 * such as the _id, version and everything else that
 * each Document in the MongoDB database has
 *
 */
export interface IUser extends Document {
  clerkId: String;
  firstName: String;
  lastName: String;
  username: String;
  email: String;
  password?: String;
  phoneNumber?: String;
  bio?: String;
  picture: String;
  location?: String;
  socialMediaLink?: String;
  reputation?: Number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  PhoneNumber: { type: Number },
  bio: { type: String },
  photo: { type: String, required: true },
  donatedMoney: { type: Number, default: 0 },
  location: { type: String },
  socialMediaLink: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  joinedAt: { type: Date, default: Date.now },
});

// Check if the model alredy exists, if not create it
const User = models.User || model("User", UserSchema);

export default User;
