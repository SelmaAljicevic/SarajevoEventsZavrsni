import { useState } from "react";
import styled from "styled-components";

import { Button, Page } from "components";
import { Input } from "components/Input/Input";
import { useRegister } from "hooks";
import { Error } from "components/Error/Error";

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
  height: 100%;
`;

export const Register = () => {
  const [arePasswordsMatching, setArePasswordsMatching] = useState(true);
  const { register } = useRegister();

  const onRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setArePasswordsMatching(false);
      return;
    }

    setArePasswordsMatching(true);
    const user = register(email, password);
    console.log(user);
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
          <Error>{!arePasswordsMatching && "Passwords need to match!"}</Error>
          <Button style={{ marginBottom: 10 }} type="submit">
            Register
          </Button>
        </FormWrapper>
      </Wrapper>
    </Page>
  );
};
