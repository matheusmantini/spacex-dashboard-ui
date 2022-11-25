import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ChartArea = styled.div`
  width: 500px;
  min-height: 400px;
  max-height: 400px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

/* @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 365px) {
    flex-direction: column;
  } */
