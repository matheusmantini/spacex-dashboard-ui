import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, defaults } from "chart.js";
import { Pie } from "react-chartjs-2";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";

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
        display: false,
      },
      legend: {
        position: 'left'
      }
    },
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
  
  return <Pie options={options} data={finalData} />;
};

export default PieChartComponent;
