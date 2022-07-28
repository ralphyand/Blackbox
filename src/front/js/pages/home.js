import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Card from "../component/card";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="carousel">
        <Carousel />
        <Card />
        <img className="" src="C:\Users\moise\Desktop\black box\borcelle.jpg" />
      </div>
    </>
  );
};
