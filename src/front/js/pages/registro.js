import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Card from "../component/card";

import "../../styles/home.css";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Card />
    </>
  );
};
