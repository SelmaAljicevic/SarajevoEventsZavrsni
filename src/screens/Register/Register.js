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
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
          <Input type="email" name="email" required />
          <Input type="password" name="password" required />
          <Input type="password" name="confirmPassword" required />
          <Error>{!arePasswordsMatching && "Passwords need to match!"}</Error>
          <Button type="submit">Register</Button>
        </FormWrapper>
      </Wrapper>
    </Page>
  );
};
