import mongoose from "mongoose";

const postsShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
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
      type: String,
      required: true,
    },
    image: String,
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
