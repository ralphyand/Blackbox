import React, { useContext, useState } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Cursos = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container text-center">
      <div className="col">
        <div className="album py-3 bg-light">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {store.course.map((course) => {
              return (
                <Card
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
