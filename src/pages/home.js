import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent pageName="Home page" designer="7amooda Skaik" />
      <Footer />
    </div>
  );
};

export default Home;
