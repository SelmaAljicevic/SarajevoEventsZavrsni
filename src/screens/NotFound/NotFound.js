import styled from "styled-components";

import { Page } from "components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const NotFound = () => {
  return (
    <Page>
      <Wrapper>
        <h1>404</h1>
        <h3>Not found</h3>
      </Wrapper>
    </Page>
  );
};
