import { Schema, model, Types, Document } from "mongoose";

export interface IFriendRequest extends Document {
  name: string;
}

const FriendRequestSchema = new Schema({
  name: { type: String, required: true },
});

export default model<IFriendRequest>("FriendRequest", FriendRequestSchema);