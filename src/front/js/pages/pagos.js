import React, { useContext, useState } from "react";
import Carousel, { Payment } from "../component/payment";

export const Pagos = () => {
  return (
    <>
      <div className="carousel text-center">
        <div className="container">
          <div className="col">
            <h1>hola mundo </h1>
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
};
