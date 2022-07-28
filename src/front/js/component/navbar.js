import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid col-12 mb-3 text-center">
        <div className="row">
          <Link to={`/`} className="navbar-brand" href="#">
            BlackBox
          </Link>
        </div>
        <div className="row">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
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
            <Link
              to={`/login`}
              className="btn btn-outline-success "
              type="submit"
            >
              Entrar
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
