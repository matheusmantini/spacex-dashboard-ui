import React from "react";
import { Chart } from "react-google-charts";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";

export const launchesByYear = [["Rocket", "Count", "Year"]];

export const options = {
  title: "Lançamentos por ano",
  chartArea: { width: "50%" },
  isStacked: true,
  legend: "none",
  bar: { groupWidth: "95%" },
  vAxis: { gridlines: { count: 3 } },
  legend: { position: "none" },
};

const BarsChartComponent = () => {
  const [data] = useRequestData(`${BASE_URL}/launches/stats`);

  const newData = data && data.launch_by_year;
  for (const key in newData) {
    if (Object.hasOwnProperty.call(newData, key)) {
      //console.log('key',newData[key]);
      launchesByYear.push([
        newData[key].rocket,
        newData[key].count,
        +newData[key].year,
      ]);
    }
  }

  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      data={launchesByYear}
      options={options}
    />
  );
};

export default BarsChartComponent;
