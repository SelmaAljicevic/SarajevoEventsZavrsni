import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button, Page, Input, Error } from "components";
import { useAuthContext } from "contexts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Login = () => {
  const { loginObj } = useAuthContext();

  const onLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const user = await loginObj.login({ email, password });
      console.log(user);
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <Page>
      <Wrapper>
        <h3>Login</h3>
        <FormWrapper onSubmit={onLogin}>
          <label>Email</label> <Input type="email" name="email" required />
          <label>Password</label>{" "}
          <Input type="password" name="password" required />
          <Button style={{ marginBottom: 10 }} type="submit">
            Login
          </Button>
          <div>
            No account? Register <Link to="register">here</Link>
          </div>
        </FormWrapper>
        <Error>
          {false ? "Passwords need to match!" : loginObj.error?.message}
        </Error>
      </Wrapper>
    </Page>
  );
};
