import styled from "styled-components";

const Hamburger = () => {
  return (
    <StyledHamburger className="hamburger">
      <input type="checkbox" id="toggle" className="nav__checkbox" />
      <label htmlFor="toggle" className="nav__button">
        <span className="nav__icon">&nbsp;</span>
      </label>
    </StyledHamburger>
  );
};

const StyledHamburger = styled.div`
  position: fixed;
  right: 2rem;
  top: 1rem;
  z-index: 1000000;
  display: none;

  .nav__checkbox {
    display: none;
  }

  .nav__button {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    cursor: pointer;
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

  @media screen and (max-width: 800px) {
    #toggle:checked ~ .nav__checkbox {
      right: 0;
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

export default Hamburger;
