import { Schema, model, Types, Document } from "mongoose";
import { IPost } from "../post/post.model";
import { IUser } from "../user/user.model";

export interface IComment extends Document {
  content: string;
  author: IUser | string;
  post: IPost | string;
  likes: number;
  timestamp: Date;
}

const CommentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Types.ObjectId, ref: "Users", required: true },
  originalPost: { type: Types.ObjectId, ref: "Post", required: true },
  likes: { type: Number, required: true, default: 0 },
  timestamp: { type: Date, default: Date() },
});

export default model<IComment>("Comment", CommentSchema);
