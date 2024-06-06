import { Schema, models, model, Document } from "mongoose";
// TODO: review fields
export interface IPost extends Document {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  imageUrl: string;
  location?: string;
  amountNeeded: number;
  amountReceived: number;
  isCompleted?: boolean;
  category: { _id: string; name: string };
  Fundraiser_organisation: { _id: string; name: string };
}

const PostSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  location: { type: String },
  amountNeeded: { type: Number, required: true },
  amountReceived: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  Fundraiser_organisation: { type: Schema.Types.ObjectId, ref: "User" },
  //views && answers && is urgent
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
