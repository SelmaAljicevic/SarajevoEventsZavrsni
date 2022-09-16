import { useCallback } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "firebase/firebaseConfig";

export const useRegister = () => {
  const register = useCallback(async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      getAuth(firebaseApp),
      email,
      password
    );
    return response.user;
  }, []);

  return {
    register,
  };
};
