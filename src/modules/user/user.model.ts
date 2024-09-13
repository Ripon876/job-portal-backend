import { CallbackError, Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    appliedJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  },
  {
    timestamps: true,
    statics: {
      async isUserExist(email) {
        const user = await this.findOne({ email });

        return user;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();

    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

const User = model("User", userSchema);

export default User;
