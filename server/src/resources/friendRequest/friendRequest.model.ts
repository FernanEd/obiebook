import { Schema, model, Types, Document } from "mongoose";

export interface IFriendRequest extends Document {
  name: string;
}

const FriendRequestSchema = new Schema({
  receiver: { type: Types.ObjectId, ref: "User", required: true },
  sender: { type: Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, default: Date() },
  status: { type: String, enum: ["pending", "declined", "accepted"] },
});

export default model<IFriendRequest>("FriendRequest", FriendRequestSchema);
