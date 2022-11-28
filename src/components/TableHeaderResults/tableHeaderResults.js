import React from "react";
import { Container } from "./styled";

const TableHeaderResults = (props) => {
  return (
    <Container>
      <p>Nº Vôo</p>
      <p>Logo</p>
      <p>Missão</p>
      <p>Data de lançamento</p>
      <p>Foguete</p>
      <p>Resultado</p>
      <p>Vídeo</p>
    </Container>
  );
};

export default TableHeaderResults;
