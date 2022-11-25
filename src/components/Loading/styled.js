import styled, { keyframes } from "styled-components";

export const sideToSideSlide = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const LoadingSlider = styled.div`
  border: 1.2rem solid var(--color-blue);
  border-radius: 50%;
  border-top: 1.2rem solid var(--color-white);
  width: 4rem;
  height: 4rem;
  animation: ${sideToSideSlide} 1.5s linear infinite;
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
`;