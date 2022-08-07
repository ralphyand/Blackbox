import React from "react";
import { Link } from "react-router-dom";
import logotipo from "../../img/logotipo.png";
import "../../styles/nav.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
      <div className="container-fluid col-11 mb-3 text-center">
        <div className="row">
          <a href="/">
            <img src={logotipo} alt="Bootstrap" width="80" height="40" />
          </a>
        </div>
        <div className="row">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Cursos"
                >
                  Cursos
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <form className="d-flex" role="search">
            <Link to="/Login">
              <button
                to="/Login"
                className="btn btn-outline-light "
                type="submit"
              >
                <i className="fas fa-user-circle" to="/Login"></i>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

//<i className="fab fa-twitter-square fa-lg mx-1"></i>
//<i className="fas fa-user-circle"></i>
