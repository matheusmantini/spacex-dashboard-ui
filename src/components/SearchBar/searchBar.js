import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonSearch, Container, ContainerSearch, Icon, InputSearch, Title } from "./styled";

const SearchBar = () => {
  return (
    <Container>
      <Title>Registros de lançamentos</Title>
      <ContainerSearch>
        <InputSearch placeholder="Pesquise por missão, foguete ou resultado" />
        <ButtonSearch>
          <Icon>
            <FontAwesomeIcon icon="fa-solid fa-search" />
          </Icon>
        </ButtonSearch>
      </ContainerSearch>
    </Container>
  );
};

export default SearchBar;
