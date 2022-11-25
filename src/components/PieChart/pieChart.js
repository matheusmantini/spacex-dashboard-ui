import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js";
import { Pie } from "react-chartjs-2";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import { Container } from "./styled";

const PieChartComponent = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [data] = useRequestData(`${BASE_URL}/launches/stats`);

  let rockets = [];
  let launches = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      key !== "success" &&
        key !== "failure" &&
        key !== "launch_by_year" &&
        launches.push(data[key]) &&
        rockets.push(key);
    }
  }

  const options = {
    plugins: {
      title: {
        display: true,
        fullSize: true,
        text: 'Lançamentos de foguetes',
        padding: 10,
        font: {
          size: 22,
          family: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        }
      },
      legend: {
        position: 'top'
      }
    },
    maintainAspectRatio: false,
    aspectRatio: 1,
    responsive: true,
  };

  const finalData = {
    labels: rockets,
    title: "Launches",
    datasets: [
      {
        data: launches,
        backgroundColor: ["#EAC435", "#345995", "#FB4D3D", "#03CEA4"],
        borderColor: ["#EAC435", "#345995", "#FB4D3D", "#03CEA4"],
        borderWidth: 1,
      },
    ],
  };
  
  return <Container><Pie options={options} data={finalData} /></Container>;
};

export default PieChartComponent;
