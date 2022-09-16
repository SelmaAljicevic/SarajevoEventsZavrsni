import { Page } from "components";
import { useLogin } from "hooks";

export const Login = () => {
  useLogin();

  return <Page>Login</Page>;
};
