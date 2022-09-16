import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
