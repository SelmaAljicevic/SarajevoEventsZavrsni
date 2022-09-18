import { signOut, getAuth } from "firebase/auth";

import { firebaseApp } from "firebase-config";
import { useMutation } from "react-query";

export const useLogout = () => {
  const { mutateAsync: logout, ...rest } = useMutation(
    async () => {
      const response = await signOut(getAuth(firebaseApp));
      return response;
    },
    {
      mutationKey: "logout-user",
    }
  );

  return {
    ...rest,
    logout,
  };
};
