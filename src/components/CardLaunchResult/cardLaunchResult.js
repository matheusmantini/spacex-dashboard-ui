import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Logo, Success, Failure, LinkIcon, FlightNumber } from "./styled";

const CardLaunchResult = (props) => {
  let getDate = props.launch.data_lancamento.slice(0, 10).split("-");
  const dataLancamento = getDate[2] + "/" + getDate[1] + "/" + getDate[0];
  return (
    <Container>
      <FlightNumber>{props.launch.voo}</FlightNumber>
      {props.launch.logo ? <Logo src={props.launch.logo} /> : null}
      <span>{props.launch.missao}</span>
      <p>{dataLancamento}</p>
      <span>{props.launch.foguete}</span>
      {props.launch.status === "success" ? <Success>Sucesso</Success> : <Failure>Falha</Failure>}
      <LinkIcon href={props.launch.youtube} target='_blank'><FontAwesomeIcon icon="fab fa-youtube" /></LinkIcon>
    </Container>
  );
};

export default CardLaunchResult;
