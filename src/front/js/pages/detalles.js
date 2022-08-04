import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import Card from "../component/card";
import Course from "../component/course";

import "../../styles/home.css";

export const Detalles = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="carousel mt-3 text-center">
        <h1> comienza tu aprendizaje </h1>
        <img
          src="https://images.unsplash.com/photo-1536632087471-3cf3f2986328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
          class="img-fluid"
          alt="..."
        ></img>
        <div className="container ">
          <div className="col">
            <div className="album py -3 bg-light">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>

              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Comprar
              </button>

              <div
                class="modal  "
                id="exampleModal"
                tabindex="-3"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="card text-ceter">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <form>
                          <img
                            src="https://images.unsplash.com/photo-1536632087471-3cf3f2986328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                            class="img-fluid"
                            alt="..."
                          ></img>
                          <div className="form-group">
                            <label htmlFor="number">Número de la tarjeta</label>
                            <input
                              type="text"
                              name="number"
                              id="number"
                              maxLength="16"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              maxLength="30"
                              className="form-control"
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-5">
                              <label htmlFor="expiry">
                                Fecha de expiración
                              </label>
                              <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="6"
                                className="form-control"
                              />
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="cvc">CVC</label>
                              <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </form>

                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
