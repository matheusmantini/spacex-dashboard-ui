import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Title } from "./styled";

const Header = () => {
  return (
    <Container>
      <Title>
        <span>
          <FontAwesomeIcon icon="fa-solid fa-rocket" />
        </span>
        Space X
      </Title>
    </Container>
  );
};

export default Header;
