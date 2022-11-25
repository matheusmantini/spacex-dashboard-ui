import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useRequestData from "../../hooks/userRequestData";
import { BASE_URL } from "../../constants/urls";
import { Container } from "./styled";

const BarsChartComponent = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [data] = useRequestData(`${BASE_URL}/launches/stats`);

  const falcon1List = [];
  const falcon1Years = [];
  const falcon1Data = [];
  const falconHeavyList = [];
  const falconHeavyYears = [];
  const falconHeavyData = [];
  const newFalcon9List = [];
  const newFalcon9Years = [];
  const newFalcon9Data = [];
  const usedFalcon9List = [];
  const usedFalcon9Years = [];
  const usedFalcon9Data = [];
  let yearsList = [];

  const newData = data && data.launch_by_year;
  for (const key in newData) {
    if (Object.hasOwnProperty.call(newData, key)) {
      yearsList.push(newData[key].year);

      switch (newData[key].rocket) {
        case "Falcon 1":
          falcon1List.push(newData[key]);
          falcon1Years.push(newData[key].year);
          break;
        case "Falcon Heavy":
          falconHeavyList.push(newData[key]);
          falconHeavyYears.push(newData[key].year);
          break;
        case "New Falcon 9":
          newFalcon9List.push(newData[key]);
          newFalcon9Years.push(newData[key].year);
          break;
        case "Used Falcon 9":
          usedFalcon9List.push(newData[key]);
          usedFalcon9Years.push(newData[key].year);
          break;
      }
    }
  }

  // Unique Years
  const yearsListUnique = yearsList.filter(
    (item, index) => yearsList.indexOf(item) === index
  );

  // Setting data to chart => Falcon 1

  falcon1List.forEach((launch) => {
    yearsListUnique.find((year) => year === launch.year) &&
      falcon1Data.push({ year: launch.year, launch: launch.count });
  });
  const noExistsFalcon1Years = yearsListUnique.filter(
    (year) => !falcon1Years.includes(year)
  );
  for (let i = 0; i < noExistsFalcon1Years.length; i++) {
    falcon1Data.push({ year: noExistsFalcon1Years[i], launch: 0 });
  }

  // Setting data to chart => Falcon Heavy

  falconHeavyList.forEach((launch) => {
    yearsListUnique.find((year) => year === launch.year) &&
      falconHeavyData.push({ year: launch.year, launch: launch.count });
  });
  const noExistsFalconHeavyYears = yearsListUnique.filter(
    (year) => !falconHeavyYears.includes(year)
  );
  for (let i = 0; i < noExistsFalconHeavyYears.length; i++) {
    falconHeavyData.push({ year: noExistsFalconHeavyYears[i], launch: 0 });
  }

  // Setting data to chart => New Falcon 9

  newFalcon9List.forEach((launch) => {
    yearsListUnique.find((year) => year === launch.year) &&
      newFalcon9Data.push({ year: launch.year, launch: launch.count });
  });
  const noExistsNewFalcon9Years = yearsListUnique.filter(
    (year) => !newFalcon9Years.includes(year)
  );
  for (let i = 0; i < noExistsNewFalcon9Years.length; i++) {
    newFalcon9Data.push({ year: noExistsNewFalcon9Years[i], launch: 0 });
  }

  // Setting data to chart => Used Falcon 9

  usedFalcon9List.forEach((launch) => {
    yearsListUnique.find((year) => year === launch.year) &&
      usedFalcon9Data.push({ year: launch.year, launch: launch.count });
  });
  const noExistsUsedFalcon9Years = yearsListUnique.filter(
    (year) => !usedFalcon9Years.includes(year)
  );
  for (let i = 0; i < noExistsUsedFalcon9Years.length; i++) {
    usedFalcon9Data.push({ year: noExistsUsedFalcon9Years[i], launch: 0 });
  }

  // Preparing final data
  const finalFalcon1Data = falcon1Data
    .sort((p1, p2) => (+p1.year > +p2.year ? 1 : +p1.year < +p2.year ? -1 : 0))
    .map((rocket) => rocket.launch);

  const finalFalconHeavyData = falconHeavyData
    .sort((p1, p2) => (+p1.year > +p2.year ? 1 : +p1.year < +p2.year ? -1 : 0))
    .map((rocket) => rocket.launch);

  const finalNewFalcon9Years = newFalcon9Data
    .sort((p1, p2) => (+p1.year > +p2.year ? 1 : +p1.year < +p2.year ? -1 : 0))
    .map((rocket) => rocket.launch);

  const finalUsedFalcon9Years = usedFalcon9Data
    .sort((p1, p2) => (+p1.year > +p2.year ? 1 : +p1.year < +p2.year ? -1 : 0))
    .map((rocket) => rocket.launch);

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Lançamentos por ano',
        padding: 20,
        font: {
          size: 22,
          family: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
        }
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 2,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const finalData = {
    labels: yearsListUnique,
    datasets: [
      {
        label: "Falcon 1",
        data: finalFalcon1Data,
        backgroundColor: "#EAC435",
      },
      {
        label: "Falcon Heavy",
        data: finalFalconHeavyData,
        backgroundColor: "#03CEA4",
      },
      {
        label: "New Falcon 9",
        data: finalNewFalcon9Years,
        backgroundColor: "#345995",
      },
      {
        label: "Used Falcon 9",
        data: finalUsedFalcon9Years,
        backgroundColor: "#FB4D3D",
      },
    ],
  };
  
  return <Container><Bar options={options} data={finalData} /></Container>;
};

export default BarsChartComponent;
