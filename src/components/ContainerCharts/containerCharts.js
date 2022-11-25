import React from "react";
import LaunchStatus from "../LaunchStatus/launchStatus";
import { Container, ChartArea } from "./styled";

const ContainerCharts = (props) => {
  return (
    <Container>
      <ChartArea>
        {props.pie}

        <LaunchStatus />
      </ChartArea>
      <ChartArea>{props.bars}</ChartArea>
    </Container>
  );
};

export default ContainerCharts;
