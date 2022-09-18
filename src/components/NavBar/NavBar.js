import { Link } from "react-router-dom";
import styled from "styled-components";

import { useAuthContext } from "contexts";
import { Button } from "components";

import SarajevoEventsLogo2 from "./SarajevoEventsLogo2.png";

const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    height: 22px;
    padding: 0px;
  }
`;

export const NavBar = () => {
  const { user, logoutObj } = useAuthContext();

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img src={SarajevoEventsLogo2} alt="logo" width="180px" />
        <div className="menu-items">
          <Link className="menu-item" to="/">
            Favourite Events
          </Link>
          <Link className="menu-item" to="/events">
            Events
          </Link>
          <Link className="menu-item" to="/about-us">
            About us
          </Link>
          {user && (
            <Link className="menu-item" to="/add-events">
              Add Events
            </Link>
          )}
          <div>
            {!user && (
              <>
                <Link className="menu-item" to="/login">
                  <strong>Login</strong>
                </Link>
                &nbsp;or&nbsp;
                <Link className="menu-item" to="/register">
                  <strong>Register</strong>
                </Link>
              </>
            )}
            {user && (
              <LogoutWrapper>
                <Link className="menu-item" to="/user">
                  {user?.email}
                </Link>
                <Button onClick={logoutObj.logout}>Logout</Button>
              </LogoutWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
