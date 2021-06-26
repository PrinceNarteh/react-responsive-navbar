import styled from "styled-components";

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>About Us</h1>
    </StyledAboutUs>
  );
};

const StyledAboutUs = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-content: center;
  background-image: linear-gradient(
      135deg,
      transparent 0%,
      transparent 17%,
      rgba(87, 146, 234, 0.6) 17%,
      rgba(87, 146, 234, 0.6) 59%,
      transparent 59%,
      transparent 64%,
      rgba(34, 81, 222, 0.6) 64%,
      rgba(34, 81, 222, 0.6) 100%
    ),
    linear-gradient(
      45deg,
      transparent 0%,
      transparent 2%,
      rgb(87, 146, 234) 2%,
      rgb(87, 146, 234) 46%,
      rgb(114, 178, 239) 46%,
      rgb(114, 178, 239) 54%,
      transparent 54%,
      transparent 63%,
      rgb(7, 48, 216) 63%,
      rgb(7, 48, 216) 100%
    ),
    linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255));

  h1 {
    font-size: 3rem;
    color: #fff;
  }
`;

export default AboutUs;
