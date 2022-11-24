import React from "react";
import { Chart } from "react-google-charts";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";

export const options = {
  title: "Lançamentos de foguetes",
};

/* 

{
    "Falcon 1": 5,
    "Falcon 9": 178,
    "Falcon Heavy": 3,
    "success": 181,
    "failure": 5,
    "launch_by_year": [
        {
            "rocket": "Falcon 1",
            "year": "2006",
            "count": 1
        },
        {
            "rocket": "Falcon 1",
            "year": "2007",
            "count": 1
        },
        {
            "rocket": "Falcon 1",
            "year": "2008",
            "count": 2
        },
        {
            "rocket": "Falcon 1",
            "year": "2009",
            "count": 1
        },
        {
            "rocket": "Falcon 9",
            "year": "2010",
            "count": 2
        },
        {
            "rocket": "Falcon 9",
            "year": "2012",
            "count": 2
        },
        {
            "rocket": "Falcon 9",
            "year": "2013",
            "count": 3
        },
        {
            "rocket": "Falcon 9",
            "year": "2014",
            "count": 6
        },
        {
            "rocket": "Falcon 9",
            "year": "2015",
            "count": 7
        },
        {
            "rocket": "Falcon 9",
            "year": "2016",
            "count": 9
        },
        {
            "rocket": "Falcon 9",
            "year": "2017",
            "count": 18
        },
        {
            "rocket": "Falcon 9",
            "year": "2018",
            "count": 20
        },
        {
            "rocket": "Falcon Heavy",
            "year": "2018",
            "count": 1
        },
        {
            "rocket": "Falcon 9",
            "year": "2019",
            "count": 11
        },
        {
            "rocket": "Falcon Heavy",
            "year": "2019",
            "count": 2
        },
        {
            "rocket": "Falcon 9",
            "year": "2020",
            "count": 26
        },
        {
            "rocket": "Falcon 9",
            "year": "2021",
            "count": 31
        },
        {
            "rocket": "Falcon 9",
            "year": "2022",
            "count": 43
        }
    ]
}

*/

const PieChartComponent = () => {
  const [data] = useRequestData(`${BASE_URL}/launches/stats`);

  let rockets = [["Rocket", "Launches"]];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      key !== "success" &&
        key !== "failure" &&
        key !== "launch_by_year" &&
        rockets.push([key, data[key]]);
    }
  }

  return (
    <Chart
      chartType="PieChart"
      data={rockets}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChartComponent;
