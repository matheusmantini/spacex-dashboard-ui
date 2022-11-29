import React, { useEffect, useState } from "react";
import { Container, ContainerTable } from "./styled";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import CardLaunchResult from "../CardLaunchResult/cardLaunchResult";
import TableHeaderResults from "../TableHeaderResults/tableHeaderResults";
import axios from "axios";

const SearchesResults = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [urlPagination, setUrlPagination] = useState(
    "launches/?limit=5&page=1"
  );

  const [resultDB, setResultDB] = useState(0);
  let maxPageResult = 1;

  useEffect(() => {
    setUrlPagination(`launches?limit=5&page=${pageNumber}`);
    const getData = () => {
      axios
        .get(`${BASE_URL}/${urlPagination}`)
        .then((res) => {
          setResultDB(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [urlPagination, pageNumber]);
  const [dataDB] = useRequestData(`${BASE_URL}/${urlPagination}`);

  let launchesResultList = null;
  let tableData = [];
  if (resultDB === 0) {
    if (dataDB && dataDB.results) {
      const data = dataDB.results;
      //setMaxPageResult(dataDB.totalPages);
      maxPageResult = dataDB.totalPages;
      for (let i = 0; i < dataDB.results.length; i++) {
        tableData.push({
          voo: data[i].flight_number,
          logo: data[i].links.patch.small,
          missao: data[i].name,
          data_lancamento: data[i].date_utc,
          foguete: data[i].rocket_name,
          status: data[i].status,
          youtube: data[i].links.webcast,
        });
      }
    } else if (dataDB) {
      for (let i = 0; i < dataDB.length; i++) {
        tableData.push({
          voo: dataDB[i].flight_number,
          logo: dataDB[i].links.patch.small,
          missao: dataDB[i].name,
          data_lancamento: dataDB[i].date_utc,
          foguete: dataDB[i].rocket_name,
          status: dataDB[i].status,
          youtube: dataDB[i].links.webcast,
        });
      }
    }
  } else {
    if (resultDB && resultDB.results) {
      const data = resultDB.results;
      //setMaxPageResult(resultDB.totalPages);
      maxPageResult = resultDB.totalPages;
      for (let i = 0; i < resultDB.results.length; i++) {
        tableData.push({
          voo: data[i].flight_number,
          logo: data[i].links.patch.small,
          missao: data[i].name,
          data_lancamento: data[i].date_utc,
          foguete: data[i].rocket_name,
          status: data[i].status,
          youtube: data[i].links.webcast,
        });
      }

      launchesResultList =
        dataDB &&
        tableData.map((launch, index) => {
          return <CardLaunchResult key={index} launch={launch} />;
        });
    } else if (resultDB) {
      for (let i = 0; i < resultDB.length; i++) {
        tableData.push({
          voo: resultDB[i].flight_number,
          logo: resultDB[i].links.patch.small,
          missao: resultDB[i].name,
          data_lancamento: resultDB[i].date_utc,
          foguete: resultDB[i].rocket_name,
          status: resultDB[i].status,
          youtube: resultDB[i].links.webcast,
        });
      }

      launchesResultList =
        resultDB &&
        tableData.map((launch, index) => {
          return <CardLaunchResult key={index} launch={launch} />;
        });
    }
  }

  const onChangeAddPageNumber = (e) => {
    setPageNumber(e.target.value);
  };

  return (
    <Container>
      <ContainerTable>
        <TableHeaderResults />
        {dataDB && dataDB.results ? launchesResultList : null}
        <input
          type="number"
          name="pageNumber"
          id="pageNumber"
          value={pageNumber}
          min={1}
          max={maxPageResult}
          onChange={onChangeAddPageNumber}
        />
      </ContainerTable>
    </Container>
  );
};

export default SearchesResults;
