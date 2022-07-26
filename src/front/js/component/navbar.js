import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid col-12 mb-3 text-center">
        <div className="row">
          <a class="navbar-brand" href="#">
            BlackBox
          </a>
        </div>
        <div className="row">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Cursos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success" type="submit">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
