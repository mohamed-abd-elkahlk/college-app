import mongoose from "mongoose";

export const AttachmentSchema = new mongoose.Schema({
  link_to_file: {
    type: String,
  },
});
