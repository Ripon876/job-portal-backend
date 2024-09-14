import { catchAsync } from "@shared/catchAsync";
import { Response } from "express";
import { IRequest } from "types/shared.types";
import * as jobServices from "./job.services";
import { calculatePagination } from "@helpers/calculatePagination";
import { pick } from "@utils/pick";
import { PAGINATION_FIELDS, QUERY_FIELDS } from "@constants/appContants";
import { Types } from "mongoose";

// Create a new job
export const createJob = catchAsync(async (req: IRequest, res: Response) => {
  const job = await jobServices.createJob(req.body, req.user!);

  res.status(201).json({
    status: "success",
    data: job,
  });
});

// Get all jobs with pagination and filtering  - get user specifc jobs by postedOnly and appliedOnly query.
export const getJobs = catchAsync(async (req: IRequest, res: Response) => {
  const userId = req.user!._id;
  const paginationOptions = calculatePagination(
    pick(req.query, PAGINATION_FIELDS)
  );
  const query = pick(req.query, QUERY_FIELDS);
  const { data, meta } = await jobServices.getJobs(
    userId,
    query,
    paginationOptions
  );

  res.status(200).json({
    status: "success",
    data,
    meta,
  });
});

// Update a job
export const updateJob = catchAsync(async (req: IRequest, res: Response) => {
  const job = await jobServices.updateJob(
    req.params.id,
    req.body,
    req.user!._id
  );

  res.status(200).json({
    status: "success",
    message: "Job updated successfully",
    data: job,
  });
});

// Delete a job
export const deleteJob = catchAsync(async (req: IRequest, res: Response) => {
  await jobServices.deleteJob(req.params.id, req.user!._id);

  res.status(204).json({
    status: "success",
    message: "Job deleted successfully",
  });
});

// Get a specific job
export const getJobById = catchAsync(async (req: IRequest, res: Response) => {
  const job = await jobServices.getJobById(req.params.id);

  res.status(200).json({
    status: "success",
    data: job,
  });
});

// Apply for a job
export const applyForJob = catchAsync(async (req: IRequest, res: Response) => {
  const jobId = new Types.ObjectId(req.params.id);
  const job = await jobServices.applyForJob(jobId, req.user!._id);

  res.status(200).json({
    status: "success",
    message: "Applied successfully",
    data: job,
  });
});
