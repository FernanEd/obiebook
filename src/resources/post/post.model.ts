import { Schema, model, Types, Document } from "mongoose";
import { IUser } from "../user/user.model";

export interface IPost extends Document {
  content: string;
  author: IUser | string;
  likes: number;
  timestamp: Date;
}

const PostSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Types.ObjectId, ref: "Users", required: true },
  likes: { type: Number, required: true, default: 0 },
  timestamp: { type: Date, default: Date() },
});

export default model<IPost>("Post", PostSchema);
