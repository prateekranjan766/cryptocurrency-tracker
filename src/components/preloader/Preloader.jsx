import React from "react";
import loader from "./loading.gif";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="Preloader" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Preloader;
