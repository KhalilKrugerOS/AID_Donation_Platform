import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  ClerkId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  photo: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
