import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logotipo from "../../img/logotipo.png";
import { Context } from "../store/appContext";
import "../../styles/nav.css";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    actions.logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-2">
      <div className="container-fluid">
        <div className="mx-5">
          <a href="/">
            <img src={logotipo} alt="Bootstrap" width="80" height="40" />
          </a>
        </div>
        <li className="nav-item collapse navbar-collapse">
          <Link to="/cursos" className="nav-link active text-light">
            Cursos
          </Link>
        </li>
        {!store.token ? (
          <li className="nav-item">
            <Link to={`/user_register`} className="nav-link active text-light">
              Crear cuenta
            </Link>
          </li>
        ) : (
          ""
        )}
        {!store.token ? (
          <Link to="/Login" className="btn btn-outline-light">
            <i className="fas fa-user-circle"></i>
          </Link>
        ) : (
          <>
            <Link
              to={`/my_course`}
              className="nav-link active text-light mx-5"
              id="NombredelUsuario"
            >
              Mis cursos
            </Link>
            <Link to="/user_profile " className="text-light mx-5">
              {store.name}
            </Link>
            <button className="btn btn-outline-light mx-5" onClick={logout}>
              <i className="fas fa-sign-out-alt fa-beat"></i>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
