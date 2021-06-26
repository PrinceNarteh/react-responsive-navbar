import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <StyledNavItem>
      <Link to={to}>{label}</Link>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  display: inline-block;
  list-style: none;
  line-height: 79px;
  margin: 0 5px;

  & a {
    color: #fff;
    font-size: 17px;
    padding: 10px 15px;
    text-decoration: none;
    text-transform: uppercase;

    transition: all 0.3s;

    &:hover {
      color: #06b7fd;
    }
  }
`;

export default NavItem;
