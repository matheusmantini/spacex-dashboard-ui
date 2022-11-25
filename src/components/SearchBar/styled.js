import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerSearch = styled.div`
  width: 1050px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: var(--color-white);
  font-size: 22px;
`;

export const Icon = styled.i`
  color: var(--bg-color);
  font-size: 18px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-right: 10px;
  padding-left: 12px;
  font-size: 16px;
`;

export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--color-white);
  cursor: pointer;
`;
