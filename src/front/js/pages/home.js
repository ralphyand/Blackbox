import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Course from "../component/course";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <Course />
        <Course />
        <Course />
      </div>
      <div className="row justify-content-center text-center">
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
};
