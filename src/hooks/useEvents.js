import { useQuery } from "react-query";

import API from "API";
import { parseParams } from "helpers";

export const useEvents = (queryProps, config) => {
  return useQuery(
    ["events", queryProps],
    async () => {
      const apiClient = new API().getInstance();
      const params = parseParams(queryProps);
      const res = await apiClient.get(`/events${params ? `?${params}` : null}`);
      return res.data;
    },
    config
  );
};
