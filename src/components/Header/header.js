import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Title, Icon } from "./styled";

const Header = () => {
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon="fa-solid fa-rocket" />
      </Icon>
      <Title>Space X</Title>
    </Container>
  );
};

export default Header;
