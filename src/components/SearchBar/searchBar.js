import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonSearch, Container, ContainerSearch, Icon, InputSearch, Title } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const SearchBar = (props) => {


  const [controlledSearchTerm,setControlledSearchTerm] = useState('');

  const onChangeSearch = (e) => {
    setControlledSearchTerm(e.target.value);
  };
  const onClickSearch = () => {
    props.setSearchTerm(controlledSearchTerm);
  };

  return (
    <Container>
      <Title>Registros de lançamentos</Title>
      <ContainerSearch>
        <InputSearch value={controlledSearchTerm} onChange={onChangeSearch} placeholder="Pesquise pela missão" />
        <ButtonSearch onClick={onClickSearch}>
          <Icon>
            <FontAwesomeIcon icon="fa-solid fa-search" />
          </Icon>
        </ButtonSearch>
      </ContainerSearch>
    </Container>
  );
};

export default SearchBar;
