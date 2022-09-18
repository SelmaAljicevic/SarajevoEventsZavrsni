import styled from "styled-components";

import { Footer, NavBar } from "components";

const ContentWrapper = styled.div`
  min-height: 60%;
`;

export const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
};
