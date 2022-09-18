import { useContext, useState, useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useLogin, useLogout, useRegister } from "hooks";
import { firebaseApp } from "firebase-config";

const AuthContext = createContext();
const auth = getAuth(firebaseApp);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const loginObj = useLogin();
  const registerObj = useRegister();
  const logoutObj = useLogout();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (changedUser) => {
      localStorage.setItem("email", changedUser?.email);
      localStorage.setItem("accessToken", changedUser?.accessToken);
      setUser(
        changedUser
          ? {
              email: changedUser?.email,
            }
          : null
      );

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    setUser,
    loginObj,
    registerObj,
    logoutObj,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  if (!AuthContext)
    throw new Error("useAuthContext must be used within a AuthProvider");

  return useContext(AuthContext);
};
