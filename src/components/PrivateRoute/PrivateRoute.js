import { Redirect, Route } from "react-router-dom";

import { useAuthContext } from "contexts";

export const PrivateRoute = ({ ...rest }) => {
  const { user } = useAuthContext();

  if (!user) return <Redirect to="/" />;

  return <Route {...rest} />;
};
