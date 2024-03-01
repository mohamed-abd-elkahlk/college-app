import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "first name reqired to create account"],
    },
    last_name: {
      type: String,
      required: [true, "last name reqired to create account"],
    },
    email: {
      type: String,
      required: [true, "email reqired to create account"],
    },
    role: { type: String, enum: ["admin", "user", "manger"], default: "user" },
    bio: String,
    password: {
      type: String,
      required: [true, "email reqired to create account"],
      min: 8,
      max: 20,
    },
    image: String,
    posts: [{}],
    resources: [{}],
    saved: [{}],
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
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password is not modified

  const saltRounds = 10; // Adjust the salt rounds as needed (higher is more secure)
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
