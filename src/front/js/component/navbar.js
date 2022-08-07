import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logotipo from "../../img/logotipo.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    actions.logout();
    navigate("/");
  };

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
              {!store.token ? (
                <li className="nav-item ">
                  <Link to={`/user_register`} className="nav-link " href="#">
                    Crear cuenta
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
        <div className="row">
          <form className="d-flex" role="search">
            {!store.token ? (
              <Link to="/Login" className="btn btn-outline-success">
                Entrar
              </Link>
            ) : (
              <div>
                <div className="text-light">
                  {store.name}
                  <button
                    className="btn btn-outline-success mx-2"
                    onClick={logout}
                  >
                    Log out
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};
