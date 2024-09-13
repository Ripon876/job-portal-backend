import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    companyName: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    contract: {
      type: String,
      enum: ["Full time", "Part time"],
      default: "Full time",
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Job = model("Job", jobSchema);

export default Job;
