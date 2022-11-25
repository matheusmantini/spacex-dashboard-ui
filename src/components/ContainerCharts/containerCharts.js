import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, ChartArea } from "./styled";

const ContainerCharts = (props) => {
  return (
    <Container>
      <ChartArea>
        <h3>Lançamentos de foguetes</h3>
        {props.pie}
      </ChartArea>
      <ChartArea>
        <h3>Lançamentos por ano</h3>
        {props.bars}
      </ChartArea>
    </Container>
  );
};

export default ContainerCharts;
