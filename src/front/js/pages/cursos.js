import React, { useContext, useState } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/login.css";

export const Cursos = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container text-center">
      <h2 id="nuestrosCursos"> Todos Nuestros Cursos </h2>
      <div className="col">
        <div className="album py-3 bg-light">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {store.course.map((course) => {
              return (
                <Card
                  id={course.id}
                  price={course.price}
                  name={course.name}
                  description={course.description}
                  imagen={course.imagen}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
