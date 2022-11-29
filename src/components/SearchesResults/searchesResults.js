import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerTable,
  Pagination,
  PageButton,
  PageButtonFixed,
} from "./styled";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import CardLaunchResult from "../CardLaunchResult/cardLaunchResult";
import TableHeaderResults from "../TableHeaderResults/tableHeaderResults";
import axios from "axios";

const SearchesResults = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [urlPagination, setUrlPagination] = useState(
    `launches/?limit=5&page=1`
  );

  const [resultDB, setResultDB] = useState(0);
  let maxPageResult = 1;

  useEffect(() => {
    props.searchTerm || setUrlPagination(`launches?limit=5&page=${pageNumber}`);
    const getData = () => {
      axios
        .get(`${BASE_URL}/${urlPagination}`)
        .then((res) => {
          setResultDB(res.data);
        })
        .catch((err) => {
          //alert(err.message);
        });
    };
    getData();
  }, [urlPagination, pageNumber]);

  useEffect(() => {
    setUrlPagination(
      `launches?search=${props.searchTerm}&limit=5&page=${pageNumber}`
    );
  }, [props.searchTerm]);

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
  const onClickAddPageNumber = (e) => {
    setPageNumber(e.target.value);
  };

  const allPagesAvailable = [];
  for (let i = 0; i < maxPageResult; i++) {
    allPagesAvailable.push(i + 1);
  }
  const paginate = (pagesArray, pageNumber) => {
    const previousPage =
      Number(pageNumber) - 1 === 0
        ? Number(pageNumber)
        : Number(pageNumber) - 1;
    const nextPage =
      pagesArray.length === Number(pageNumber)
        ? Number(pageNumber)
        : pagesArray.length >= Number(pageNumber)
        ? Number(pageNumber) + 1
        : null;
    let indexPrevious = 0;
    if (previousPage !== 0) {
      indexPrevious = pagesArray.indexOf(previousPage);
    } else {
      indexPrevious = pagesArray.indexOf(pageNumber);
    }
    const indexNext = pagesArray.indexOf(nextPage);
    return pagesArray.slice(
      indexPrevious,
      indexNext <= 2 ? indexNext + 2 : indexNext + 1
    );
  };

  const paginateFiltered = paginate(allPagesAvailable, pageNumber);

  const pagesList = paginateFiltered.map((page, index) => {
    const isActualPage = page === Number(pageNumber);
    return (
      <PageButton
        activePage={isActualPage}
        key={index}
        value={page}
        onClick={onClickAddPageNumber}
      >
        {page}
      </PageButton>
    );
  });

  return (
    <Container>
      <ContainerTable>
        <TableHeaderResults />
        {dataDB && dataDB.results && launchesResultList.length > 0
          ? launchesResultList
          : "Não há resultados para sua busca!"}

        {maxPageResult !== 1 ? (
          <Pagination>
            {Number(pageNumber) !== 1 && Number(pageNumber) !== 2 && (
              <PageButtonFixed
                key={Math.random()}
                value={1}
                onClick={onClickAddPageNumber}
              >
                {1}
              </PageButtonFixed>
            )}

            {Number(pageNumber) > 3 ? "..." : null}
            {pagesList}
            {Number(pageNumber) < 39 ? "..." : null}

            {Number(pageNumber) !== 40 && Number(pageNumber) !== 41 && (
              <PageButtonFixed
                key={Math.random()}
                value={maxPageResult}
                onClick={onClickAddPageNumber}
              >
                {maxPageResult}
              </PageButtonFixed>
            )}
          </Pagination>
        ) : (
          <Pagination>{pagesList}</Pagination>
        )}
      </ContainerTable>
    </Container>
  );
};

export default SearchesResults;
