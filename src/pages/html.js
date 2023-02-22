import React from "react";
import Footer from "../comp/Footer";
import Header from "../comp/Header";
import MainContent from "../comp/MainContent";

const Html = () => {
  return (
    <div>
      <Header />
      <MainContent pageName="HTML page" designer="Maryam Skaik" />
      <Footer />
    </div>
  );
};

export default Html;
