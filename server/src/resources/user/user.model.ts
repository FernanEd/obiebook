import { Schema, model, Types, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  friends: { type: [Types.ObjectId], ref: "User", required: true, default: [] },
});

export default model<IUser>("User", UserSchema);
