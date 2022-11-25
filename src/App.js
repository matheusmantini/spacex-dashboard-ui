import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header/header";
import PieChartComponent from "./components/PieChart/pieChart";
import ContainerCharts from "./components/ContainerCharts/containerCharts";
import BarsChartComponent from "./components/BarsChart/barsChart";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerCharts pie={<PieChartComponent />} bars={<BarsChartComponent />}/>
      
    </>
  );
};

export default App;
