import { useAuthContext } from "contexts";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ ...rest }) => {
  const { user } = useAuthContext();

  if (!user) return <Redirect to="/" />;

  return <Route {...rest} />;
};
