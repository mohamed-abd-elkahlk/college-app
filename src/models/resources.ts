import mongoose from "mongoose";

const resourcesShema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
    title: {
      type: String,
    },
    desc: String,
    attachments: [
      {
        google_link: String,
        name: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      // transform: (_, ret) => {
      //   delete ret._id;
      // },
    },
  }
);

const Resources =
  mongoose.models.Resources || mongoose.model("Resources", resourcesShema);

export default Resources;
