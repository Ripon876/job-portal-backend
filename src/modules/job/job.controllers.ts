import { catchAsync } from "@shared/catchAsync";
import { Response } from "express";
import { IRequest } from "types/shared.types";
import * as jobServices from "./job.services";
import { calculatePagination } from "@helpers/calculatePagination";
import { pick } from "@utils/pick";
import { PAGINATION_FIELDS } from "@constants/appContants";
import { Types } from "mongoose";

// Create a new job
export const createJob = catchAsync(async (req: IRequest, res: Response) => {
  const job = await jobServices.createJob(req.body, req.user!);

  res.status(201).json({
    status: "success",
    data: job,
  });
});

// Get all jobs posted by the authenticated user
export const getJobs = catchAsync(async (req: IRequest, res: Response) => {
  const paginationOptions = calculatePagination(
    pick(req.query, PAGINATION_FIELDS)
  );

  const { data, meta } = await jobServices.getJobs(
    req.query,
    paginationOptions
  );

  res.status(200).json({
    status: "success",
    data,
    meta,
  });
});

// Get all jobs posted by the authenticated user
export const getJobsByAdmin = catchAsync(
  async (req: IRequest, res: Response) => {
    const jobs = await jobServices.getJobsByAdmin(req.user!._id);

    res.status(200).json({
      status: "success",
      data: jobs,
    });
  }
);

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

// Get all jobs applied by the authenticated user
export const getAppliedJobsByUser = catchAsync(
  async (req: IRequest, res: Response) => {
    const jobs = await jobServices.getAppliedJobsByUser(req.user!._id);

    res.status(200).json({
      status: "success",
      data: jobs,
    });
  }
);
