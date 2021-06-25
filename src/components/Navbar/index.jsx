import styled from "styled-components";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import NavItemList from "./NavItemList";

const Navbar = () => {
  return (
    <StyledNavbar>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars" id="bars"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>

      <Logo />

      <NavItemList />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: #0695b9;
  height: 80px;
  width: 100%;

  .logo {
    color: white;
    font-size: 33px;
    line-height: 80px;
    padding: 0 100px;
    font-weight: bold;
    text-transform: uppercase;
  }

  #check {
    display: none;
  }

  @media only screen and (max-width: 980px) {
    .logo {
      padding-left: 40px;
    }

    .checkbtn #bars {
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

    #check:checked ~ ul {
      right: 0;
    }

    #check:checked ~ label #bars {
      display: none;
    }

    #check:checked ~ label #cancel {
      display: block;
    }
  }

  @media only screen and (max-width: 600px) {
    .logo {
      font-size: 30px;
    }
  }
`;

export default Navbar;
