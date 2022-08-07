import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.css";

export const Detalles = () => {
  const [detalles, setDetalles] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/course/" + params.id)
      .then((data) => data.json())
      .then((data) => setDetalles(data));
  }, []);

  return detalles ? (
    <div className="container my-5">
      <div className="card mb-3">
        <img src={detalles.imagen} className="card-img-top" alt="..." />
        <h1 className="">{detalles.name}</h1>
        <p className="card-text">{detalles.description}</p>
        <small className="text-muted">{detalles.price}€</small>
        <small className="text-muted"> Profesor: {detalles.teacher.name}</small>
        <small className="text-muted"> duracion {detalles.time}</small>
      </div>
    </div>
  ) : (
    <h1>no hay cursos </h1>
  );
};
