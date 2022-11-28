import React from "react";
import { Container, FailureLabel, SuccessLabel, Title } from "./styled";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";

const LaunchStatus = () => {
  const [data] = useRequestData(`${BASE_URL}/launches/stats`);
  return (
    <Container>
      <Title>Resultados de lançamento</Title>
      <SuccessLabel>
        Sucesso: <span>{data && data.success}</span>
      </SuccessLabel>
      <FailureLabel>
        Falha: <span>{data && data.failure}</span>
      </FailureLabel>
    </Container>
  );
};

export default LaunchStatus;
