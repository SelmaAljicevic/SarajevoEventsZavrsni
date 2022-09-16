import styled from "styled-components";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

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
