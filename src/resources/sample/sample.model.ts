import { Schema, model, Types, Document } from "mongoose";

export interface ISample extends Document {
  name: string;
}

const SampleSchema = new Schema({
  name: { type: String, required: true },
});

export default model<ISample>("Sample", SampleSchema);
