import styled from "styled-components";

export const Container = styled.div`
  width: 1050px;
  height: 60px;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 35px;
  background-color: lightgray;
`;

export const Title = styled.h3`
  color: var(--color-gray);
  padding: 8px 0;
`;

export const SuccessLabel = styled.h3`
  color: var(--color-success);
  padding: 2px 0;
`;

export const FailureLabel = styled.h3`
  color: var(--color-failure);
  padding: 2px 0;
`;
