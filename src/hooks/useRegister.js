import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { firebaseApp } from "firebase-config";
import { useMutation } from "react-query";

export const useRegister = () => {
  const { mutateAsync: register, ...rest } = useMutation(
    async ({ email, password }) => {
      const response = await createUserWithEmailAndPassword(
        getAuth(firebaseApp),
        email,
        password
      );
      return response.user;
    },
    {
      mutationKey: "register-user",
    }
  );

  return {
    ...rest,
    register,
  };
};
