import styled from "styled-components";

const Services = () => {
  return (
    <StyledServices>
      <h1>Services</h1>
    </StyledServices>
  );
};

const StyledServices = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: grid;
  place-content: center;
  background-image: radial-gradient(
      circle at 67% 83%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 1%,
      transparent 1%,
      transparent 5%,
      transparent 5%,
      transparent 100%
    ),
    radial-gradient(
      circle at 24% 80%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 27%,
      transparent 27%,
      transparent 63%,
      transparent 63%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 5%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 26%,
      transparent 26%,
      transparent 82%,
      transparent 82%,
      transparent 100%
    ),
    radial-gradient(
      circle at 21% 11%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 35%,
      transparent 35%,
      transparent 45%,
      transparent 45%,
      transparent 100%
    ),
    radial-gradient(
      circle at 10% 11%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 21%,
      transparent 21%,
      transparent 81%,
      transparent 81%,
      transparent 100%
    ),
    radial-gradient(
      circle at 19% 61%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 20%,
      transparent 20%,
      transparent 61%,
      transparent 61%,
      transparent 100%
    ),
    radial-gradient(
      circle at 13% 77%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 63%,
      transparent 63%,
      transparent 72%,
      transparent 72%,
      transparent 100%
    ),
    radial-gradient(
      circle at 30% 93%,
      hsla(317, 0%, 96%, 0.05) 0%,
      hsla(317, 0%, 96%, 0.05) 33%,
      transparent 33%,
      transparent 82%,
      transparent 82%,
      transparent 100%
    ),
    linear-gradient(90deg, rgb(22, 176, 207), rgb(103, 7, 215));

  h1 {
    font-size: clamp(2rem, 5rem, 10vw);
    color: #fff;
  }
`;

export default Services;
