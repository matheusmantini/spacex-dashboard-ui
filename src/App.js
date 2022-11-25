import React from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header/header";
import PieChartComponent from "./components/PieChart/pieChart";
import ContainerCharts from "./components/ContainerCharts/containerCharts";
import BarsChartComponent from "./components/BarsChart/barsChart";
import SearchBar from "./components/SearchBar/searchBar";
import SearchesResults from "./components/SearchesResults/searchesResults";
import Footer from "./components/Footer/footer";
import Loading from "./components/Loading/loading";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerCharts pie={<PieChartComponent />} bars={<BarsChartComponent />}/>
      <SearchBar />
      <SearchesResults />
      <Footer />
    </>
  );
};

export default App;
