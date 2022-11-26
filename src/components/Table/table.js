import React, { useState, useMemo } from "react";
import Pagination from "./util/Pagination";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

let PageSize = 5;

const TableComponent = () => {
  const [dataDB] = useRequestData(`${BASE_URL}/launches`);
  let tableData = [];
  if (dataDB) {
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

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData && tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nº Vôo</th>
            <th>Logo</th>
            <th>Missão</th>
            <th>Data de Lançamento</th>
            <th>Foguete</th>
            <th>Resultado</th>
            <th>Vídeo</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData &&
            currentTableData.map((item) => {
              let getDate = item.data_lancamento.slice(0, 10).split("-");
              const dataLancamento =
                getDate[2] + "/" + getDate[1] + "/" + getDate[0];
              return (
                <tr>
                  <td>{item.voo}</td>
                  <td>
                    <img className="logo" src={item.logo} />
                  </td>
                  <td>{item.missao}</td>
                  <td>{dataLancamento}</td>
                  <td>{item.foguete}</td>
                  <td>
                    {item.status === "sucesso" ? (
                      <p className="sucesso">Sucesso</p>
                    ) : (
                      <p className="failure">Fracasso</p>
                    )}
                  </td>
                  <td>
                    <a href={item.youtube} target="_blank"><img src="spacex-dashboard-ui/src/assets/youtube-logo.svg" /></a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default TableComponent;
