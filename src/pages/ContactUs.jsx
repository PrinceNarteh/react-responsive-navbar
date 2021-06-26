import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <h1>Contact Us</h1>
    </StyledContactUs>
  );
};

const StyledContactUs = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-content: center;
  background-image: radial-gradient(
    circle at top right,
    rgb(36, 9, 119) 0%,
    rgb(36, 9, 119) 48%,
    rgb(72, 7, 149) 48%,
    rgb(72, 7, 149) 53%,
    rgb(109, 5, 178) 53%,
    rgb(109, 5, 178) 56%,
    rgb(145, 2, 208) 56%,
    rgb(145, 2, 208) 69%,
    rgb(181, 0, 237) 69%,
    rgb(181, 0, 237) 100%
  );

  h1 {
    font-size: clamp(2rem, 5rem, 10vw);
    color: #fff;
  }
`;

export default ContactUs;
