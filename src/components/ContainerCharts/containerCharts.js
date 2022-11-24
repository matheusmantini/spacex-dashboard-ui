import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "./styled";

const ContainerCharts = (props) => {
  return (
    <Container>
        {props.pie}
        {props.bars}
    </Container>
  );
};

export default ContainerCharts;
