export const parseParams = (queryParams) => {
  return Object.entries(queryParams)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
};
