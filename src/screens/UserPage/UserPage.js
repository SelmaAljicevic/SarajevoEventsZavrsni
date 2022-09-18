import styled from "styled-components";

import { Button, Page } from "components";
import { useAuthContext } from "contexts";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "firebase-config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  maring-inline: 10%;
  height: 500px;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  color: red;
  border-color: red;
`;

export const UserPage = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  const onDelete = () => {
    const currentUser = getAuth(firebaseApp).currentUser;
    currentUser
      .delete()
      .then(() => {
        localStorage.clear();
        history.push("/");
      })
      .catch(() => console.log("Error deleting user"));
  };

  return (
    <Page>
      <Wrapper>
        <label>Email: {user?.email}</label>
        <StyledButton onClick={onDelete}>Delete Account</StyledButton>
      </Wrapper>
    </Page>
  );
};
