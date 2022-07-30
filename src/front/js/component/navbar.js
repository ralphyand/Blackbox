import React from "react";
import { Link } from "react-router-dom";
import logotipo from "../../img/logotipo.jpg";
import "../../styles/nav.css";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
      <div class="container-fluid col-12 mb-3 text-center">
        <div className="row">
          <a href="/">
            <img
              src={logotipo}
              alt="Bootstrap"
              width="100"
              height="100"
              className="rounded-circle"
            />
          </a>
        </div>
        <div className="row">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/Cursos">
                  Cursos
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="#">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <form class="d-flex" role="search">
            <Link to="/Login">
              <button to="/Loguin" class="btn btn-outline-light " type="submit">
                <i class="fas fa-user-circle" to="/Loguin"></i>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

//<i className="fab fa-twitter-square fa-lg mx-1"></i>
//<i class="fas fa-user-circle"></i>
