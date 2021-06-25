import styled from "styled-components";
import NavItem from "./NavItem";

const NavItemList = () => {
  return (
    <StyledNavItemList className="nav__list">
      <NavItem to="/" label="Home" />
      <NavItem to="/about" label="About us" />
      <NavItem to="/services" label="Services" />
      <NavItem to="/contact" label="Contact us" />
    </StyledNavItemList>
  );
};

const StyledNavItemList = styled.ul`
  float: right;
  margin-right: 20px;

  z-index: 999;

  /* .checkbtn #cancel, */
  .checkbtn #bars,
  .checkbtn #cancel {
    font-size: 30px;
    color: #fff;
    float: right;
    margin: 25px;
    cursor: pointer;

    display: none;

    transition: all 0.2s ease;
  }
`;

export default NavItemList;
