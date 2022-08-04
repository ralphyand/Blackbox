import React from "react";
import { Link } from "react-router-dom";
import logotipo from "../../img/logotipo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid col-12 mb-3 text-center">
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
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cursos
                </a>
              </li>
              <li className="nav-item ">
                <Link to={`/user_register`} className="nav-link " href="#">
                  Crear cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <form className="d-flex" role="search">
            <Link to="/Login">
              <button
                to="/Loguin"
                className="btn btn-outline-success "
                type="submit"
              >
                Entrar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
