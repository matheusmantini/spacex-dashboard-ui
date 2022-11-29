import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const ContainerTable = styled.div`
  width: 1050px;
  height: 520px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`;

export const Pagination = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button`
  cursor: pointer;
  margin: 0 4px;
  padding: 5px;
  border-radius: 5px;
  ${(props) => {
    if(props.activePage === true) {
       return 'background-color: var(--bg-color);';
    } else {
       return 'background-color: var(--color-blue);';
    }
 }} 
  color: white;
`;

export const PageButtonFixed = styled.button`
cursor: pointer;
margin: 0 4px;
padding: 5px;
border-radius: 5px;
background-color: var(--color-gray);
color: white;
`;