import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import NavItemList from "./NavItemList";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Hamburger />
      <NavItemList />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: #0695b9;
  height: 80px;
  width: 100%;
  padding: 0 100px;

  #check {
    /* display: none; */
  }

  @media only screen and (max-width: 980px) {
    padding: 0 40px;
  }

  @media only screen and (max-width: 750px) {
    .hamburger {
      display: block;
    }

    ul {
      position: fixed;
      background: #119dc0;
      width: 100%;
      height: 100vh;
      text-align: center;
      /* top: 80px; */

      right: -100%;
      margin-right: 0;

      transition: all 0.3s;

      & li {
        display: block;
        margin: 40px 0;

        & a {
          font-size: 20px;
        }
      }
    }

    #toggle:checked .nav__list {
      right: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .logo {
      font-size: 30px;
    }
  }
`;

export default Navbar;
