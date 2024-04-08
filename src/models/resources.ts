import mongoose from "mongoose";
import { AttachmentSchema } from "./attachments";

const resourcesShema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
    title: {
      type: String,
    },
    desc: String,
    attachments: [AttachmentSchema],
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
    },
  }
);

const Resources =
  mongoose.models.Resources || mongoose.model("Resources", resourcesShema);

export default Resources;
