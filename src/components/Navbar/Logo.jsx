import styled from "styled-components";

const Logo = () => {
  return <StyledLogo className="logo">Company</StyledLogo>;
};

const StyledLogo = styled.label`
  display: inline-block;
  color: white;
  font-size: 30px;
  line-height: 80px;
  font-weight: bold;
`;

export default Logo;
