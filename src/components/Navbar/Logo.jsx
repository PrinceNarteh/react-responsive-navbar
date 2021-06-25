import styled from "styled-components";

const Logo = () => {
  return <StyledLogo className="logo">Company</StyledLogo>;
};

const StyledLogo = styled.label`
  display: inline-block;
  color: white;
  font-size: 20px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
`;

export default Logo;
