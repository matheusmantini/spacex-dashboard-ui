import React from "react";
import { Container, ContainerTable } from "./styled";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import CardLaunchResult from "../CardLaunchResult/cardLaunchResult";
import TableHeaderResults from "../TableHeaderResults/tableHeaderResults";

const SearchesResults = (props) => {
  const [dataDB] = useRequestData(
    `${BASE_URL}/launches?limit=5&page=41` /* search=falcon& */
  );
  console.log("dataDB", dataDB && dataDB);
  let tableData = [];
  if (dataDB && dataDB.results) {
    const data = dataDB.results;
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

  const launchesResultList = dataDB && tableData.map((launch) => {
    return <CardLaunchResult launch={launch} />
  })

  return (
    <Container>
      <ContainerTable>
        <TableHeaderResults />
        {dataDB && dataDB.results ? launchesResultList: null}
        {dataDB && dataDB.totalPages ? <p>Total Pages: {dataDB.totalPages}</p> : null}
      </ContainerTable>
    </Container>
  );
};

export default SearchesResults;
