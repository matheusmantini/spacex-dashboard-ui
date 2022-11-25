import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ChartArea = styled.div`
  width: 500px;
  height: auto;
  min-height: 460px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 10px;
  margin: 0 25px;
`;

/* @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 365px) {
    flex-direction: column;
  } */
