import { Schema, model, Types, Document } from "mongoose";

export interface IPost extends Document {
  name: string;
}

const PostSchema = new Schema({
  name: { type: String, required: true },
});

export default model<IPost>("Post", PostSchema);