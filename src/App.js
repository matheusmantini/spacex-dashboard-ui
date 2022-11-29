import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Header from "./components/Header/header";
import PieChartComponent from "./components/PieChart/pieChart";
import ContainerCharts from "./components/ContainerCharts/containerCharts";
import BarsChartComponent from "./components/BarsChart/barsChart";
import SearchBar from "./components/SearchBar/searchBar";
import SearchesResults from "./components/SearchesResults/searchesResults";
import Footer from "./components/Footer/footer";

const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerCharts pie={<PieChartComponent />} bars={<BarsChartComponent />}/>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <SearchesResults searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default App;
