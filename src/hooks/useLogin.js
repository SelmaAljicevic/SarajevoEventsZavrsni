import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { firebaseApp } from "firebase-config";
import { useMutation } from "react-query";

export const useLogin = () => {
  const { mutateAsync: login, ...rest } = useMutation(
    async ({ email, password }) => {
      const response = await signInWithEmailAndPassword(
        getAuth(firebaseApp),
        email,
        password
      );
      return response.user;
    },
    {
      mutationKey: "login-user",
    }
  );

  return {
    ...rest,
    login,
  };
};
