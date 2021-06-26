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
  z-index: 999;
`;

export default NavItemList;
