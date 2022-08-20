import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/detalles.css";
import { loadStripe } from "@stripe/stripe-js";

export const Detalles = () => {
  const [detalles, setDetalles] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/course/" + params.id)
      .then((data) => data.json())
      .then((data) => setDetalles(data));
  }, []);

  return detalles ? (
    <div className="card mb-3 p-4 bg-light">
      <div class="fond"> </div>
      <div class="carduno">
        <div class="thumbnail">
          <img class="left" src={detalles.imagen} />
        </div>
        <div class="right">
          <div class="author ">
            <h2 id="nombredelcurso"> {detalles.name}</h2>
          </div>
          <div class="separator"></div>
          <p id="descripciondelcurso">{detalles.description}</p>
        </div>

        <ul id="iconosdedetalles">
          <li>
            <i class="fas fa-euro-sign"> {detalles.price} </i>
          </li>
          <li>
            <i class="fas fa-hourglass-half"> tiempo {detalles.time} </i>
          </li>
          <li>
            <small className="text-muted">
              Profesor: {detalles.teacher.name}
            </small>
          </li>
          <Link
            to={`/pagos/${detalles.id}`}
            className="btn btn-dark rounded-pill m-3"
          >
            Comprar
          </Link>

          <Link
            to={`/Start_course/${detalles.id}`}
            className="  btn btn-dark rounded-pill"
          >
            Comenzar
          </Link>
        </ul>
      </div>
    </div>
  ) : (
    <h1>este curso no esta disponible </h1>
  );
};

/* <div classNameName="card mb-3 p-4 bg-light">
      <div classNameName="row g-0">
        <div className="col-md-4">
          <img
            id="img.left"
            src={detalles.imagen}
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 classNameName="my-3 py-3 text-center">{detalles.name}</h1>

            <p classNameName="text-center">{detalles.description}</p>

            <small classNameName="text-muted"> Precio:{detalles.price}€</small>
            <br></br>
            <small classNameName="text-muted">
              Profesor: {detalles.teacher.name}
            </small>
            <small classNameName="text-muted"> duracion {detalles.time}</small>
          </div>
        </div>
      </div>
    </div> */
