import styled from "styled-components";
import Logo from "./Logo";
import NavItemList from "./NavItemList";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <input type="checkbox" id="toggle" className="nav__checkbox" />
      <label htmlFor="toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
      <NavItemList />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background: #0695b9;
  height: 80px;
  width: 100%;
  padding: 0 100px;

  .nav__button {
    position: fixed;
    height: 50px;
    width: 50px;
    right: 2rem;
    top: 40px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    display: none;
    cursor: pointer;
    z-index: 1000000;
  }

  .nav__button,
  .nav__checkbox {
    display: none;
  }

  .nav__icon {
    position: relative;
  }

  .nav__icon,
  .nav__icon::before,
  .nav__icon::after {
    width: 30px;
    height: 4px;
    border-radius: 20px;
    display: inline-block;
    background-color: #fff;
  }

  .nav__icon::after,
  .nav__icon::before {
    content: "";
    left: 0;
    position: absolute;
    transition: all 0.2s;
  }

  .nav__icon::before {
    top: -8px;
  }

  .nav__icon::after {
    top: 8px;
  }

  .nav__button:hover .nav__icon::before {
    top: -10px;
  }

  .nav__button:hover .nav__icon::after {
    top: 10px;
  }

  .nav__checkbox:checked + .nav__button .nav__icon {
    background: transparent;
  }

  .nav__checkbox:checked + .nav__button .nav__icon::before {
    top: 0;
    transform: rotate(45deg);
  }

  .nav__checkbox:checked + .nav__button .nav__icon::after {
    top: 0;
    transform: rotate(-45deg);
  }

  .nav__checkbox:checked ~ ul {
    right: 0;
  }

  @media only screen and (max-width: 980px) {
    padding: 0 40px;

    ul li a {
      font-size: 14px;
      padding: 10px 10px;
    }
  }

  @media only screen and (max-width: 800px) {
    .nav__button {
      display: block;
    }

    ul {
      position: fixed;
      background: #119dc0;
      width: 100%;
      height: 100vh;
      text-align: center;

      right: -100%;
      margin-right: 0;

      transition: all 0.3s;

      & li {
        display: block;
        margin: 10px 0;

        & a {
          font-size: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .logo {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 300px) {
    .nav__icon,
    .nav__icon::before,
    .nav__icon::after {
      width: 20px;
      height: 3px;
      border-radius: 20px;
      display: inline-block;
      background-color: #fff;
    }

    .nav__icon::before {
      top: -7px;
    }

    .nav__icon::after {
      top: 7px;
    }
  }
`;

export default Navbar;
