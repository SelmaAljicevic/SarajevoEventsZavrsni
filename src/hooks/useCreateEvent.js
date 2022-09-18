import { useMutation } from "react-query";

import API from "API";

export const useCreateEvent = (config) => {
  const { mutateAsync: createEventAsync, ...rest } = useMutation(
    async (body) => {
      const apiClient = new API().getInstance();
      const res = await apiClient.post("/events", body);
      return res.data;
    },
    config
  );

  return {
    ...rest,
    createEventAsync,
  };
};
