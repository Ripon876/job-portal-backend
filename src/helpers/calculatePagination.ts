// Helper function to calculate pagination parameters (page, limit, skip)
export const calculatePagination = (options: Record<string, any>) => {
  const page = Number(options.page || 1);
  const limit = Number(options.limit || 0);
  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};
