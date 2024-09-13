import { IUser, ObjectId } from "types/shared.types";
import Job from "./job.model";
import ApiError from "@utils/ApiError";
import { IJob } from "./job.interface";
import User from "@modules/user/user.model";

// Create a new job
export const createJob = async (jobData: IJob, user: IUser) => {
  const job = await Job.create({
    ...jobData,
    postedBy: user._id,
  });

  return job;
};

// Get a specific job
export const getJobById = async (jobId: string) => {
  const job = await Job.findById(jobId);

  if (!job) {
    throw new ApiError(404, "The job you are looking for does not exist");
  }

  return job;
};

// Get a specific job
export const getJobs = async (
  query: Record<string, any> = {},
  paginationOptions: Record<string, number>
) => {
  const { page, skip, limit } = paginationOptions;

  const jobs = await Job.find(query).skip(skip).limit(limit);
  const total = await Job.countDocuments(query);

  const meta = {
    total,
    page,
    limit,
  };

  return {
    meta,
    data: jobs,
  };
};

// Get all jobs posted by a specific user
export const getJobsByAdmin = async (userId: string) => {
  const jobs = await Job.find({ postedBy: userId });

  return jobs;
};

// Update a job
export const updateJob = async (
  jobId: string,
  updateData: IJob,
  userId: string
) => {
  const job = await Job.findOne({ _id: jobId, postedBy: userId });

  if (!job) {
    throw new ApiError(404, "The job you are trying to edit does not exist.");
  }

  await job.updateOne({ ...updateData });

  return job;
};

// Delete a job
export const deleteJob = async (jobId: string, userId: string) => {
  const job = await Job.findOne({ _id: jobId, postedBy: userId });

  if (!job) {
    throw new ApiError(404, "The job you are trying to edit does not exist.");
  }

  await job.deleteOne();

  return job;
};

// Apply for a job
export const applyForJob = async (jobId: ObjectId, userId: string) => {
  const job = await Job.findById(jobId);
  const user = await User.findById(userId);

  if (!job) {
    throw new ApiError(404, "The job you are trying to apply does not exist.");
  }

  if (user?.appliedJobs.includes(jobId)) {
    throw new ApiError(409, "You have already applied for this job.");
  }

  user?.appliedJobs.push(jobId);
  await user?.save();

  return job;
};

// Get jobs applied by a user
export const getAppliedJobsByUser = async (userId: string) => {
  const user = await User.findById(userId).populate("appliedJobs");

  return user?.appliedJobs || [];
};
