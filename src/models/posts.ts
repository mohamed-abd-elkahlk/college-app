import mongoose from "mongoose";

const postsShema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to the User model
    title: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    facility: {
      type: String,
      required: true,
    },
    team: {
      type: Number,
      required: true,
    },
    image: String,
    attachments: [
      {
        image: String,
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

const Post = mongoose.models.Post || mongoose.model("Post", postsShema);

export default Post;
