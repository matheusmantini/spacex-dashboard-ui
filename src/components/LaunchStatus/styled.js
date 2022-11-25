import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100px;
  border: 1px solid var(--color-blue);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 20px;
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
