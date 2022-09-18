import { useState } from "react";
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

export const Register = () => {
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);
  const { registerObj } = useAuthContext();

  const onRegister = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setArePasswordsMatching(false);
      return;
    }

    setArePasswordsMatching(true);
    try {
      const user = await registerObj.register({ email, password });
      console.log(user);
    } catch (error) {
      // console.log(error.message);
    }
  };

  return (
    <Page>
      <Wrapper>
        <h3>Register</h3>
        <FormWrapper onSubmit={onRegister}>
          <label>Email</label> <Input type="email" name="email" required />
          <label>Password</label>{" "}
          <Input type="password" name="password" required />
          <label>Confirm password</label>{" "}
          <Input type="password" name="confirmPassword" required />
          <Button style={{ marginBottom: 10 }} type="submit">
            Register
          </Button>
          <div>
            Already registered? Login <Link to="login">here</Link>
          </div>
        </FormWrapper>
        <Error>
          {!arePasswordsMatching
            ? "Passwords need to match!"
            : registerObj.error?.message}
        </Error>
      </Wrapper>
    </Page>
  );
};
