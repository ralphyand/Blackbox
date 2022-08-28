import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/detalles.css";
import { loadStripe } from "@stripe/stripe-js";
import { Context } from "../store/appContext";

export const Detalles = () => {
  const [detalles, setDetalles] = useState();
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    let confi = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (localStorage.getItem("jwt-token")) {
      confi = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt-token"),
        },
      };
    }

    fetch(process.env.BACKEND_URL + "/api/course/" + params.id, confi)
      .then((data) => data.json())
      .then((data) => setDetalles(data));
  }, []);

  return detalles ? (
    <div>
      <div className="fond"> </div>
      <div className="carduno">
        <div className="thumbnail">
          <img className="left" src={detalles.imagen} />
        </div>
        <div className="right">
          <div className="author ">
            <h2 id="nombredelcurso"> {detalles.name}</h2>
          </div>
          <div className="separator"></div>
          <p id="descripciondelcurso">{detalles.description}</p>
        </div>

        <ul id="iconosdedetalles">
          <li>
            <i className="fas fa-euro-sign"> {detalles.price} </i>
          </li>
          <li>
            <i className="fas fa-hourglass-half"> Duración {detalles.time} </i>
          </li>
          <li>
            <small className="text-muted">
              Profesor: {detalles.teacher.name}
            </small>
          </li>
          {store.token ? (
            detalles.is_paid ? (
              <Link
                to={`/start_course/${detalles.id}`}
                className="btn btn-dark rounded-pill m-3"
              >
                <i className="fas fa-video">{"  "} Comenzar </i>
              </Link>
            ) : (
              <Link
                to={`/pagos/${detalles.id}`}
                className="btn btn-dark rounded-pill m-3"
              >
                <i className="fas fa-shopping-cart">{"  "}Comprar</i>
              </Link>
            )
          ) : (
            <Link
              to={`/user_register`}
              className="btn btn-dark rounded-pill m-3"
            >
              <i className="far fa-user"> {""}Crear cuenta </i>
            </Link>
          )}
        </ul>
      </div>
    </div>
  ) : (
    <h1></h1>
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
