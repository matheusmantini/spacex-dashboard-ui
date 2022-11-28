import React from "react";
import LaunchStatus from "../LaunchStatus/launchStatus";
import { Container, ChartArea, ContainerStatus } from "./styled";

const ContainerCharts = (props) => {
  return (
    <>
      <Container>
        <ChartArea>{props.pie}</ChartArea>
        <ChartArea>{props.bars}</ChartArea>
      </Container>
      <ContainerStatus>
        <LaunchStatus />
      </ContainerStatus>
    </>
  );
};

export default ContainerCharts;
