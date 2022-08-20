import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logotipo from "../../img/logotipo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  const logout = () => {
    actions.logout();
    navigate("/");
  };

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
                <Link to="/cursos" className="nav-link active">
                  Cursos
                </Link>
              </li>
              {!store.token ? (
                <li className="nav-item ">
                  <Link to={`/user_register`} className="nav-link active">
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
              <Link to="/Login" className="btn btn-outline-light">
                <i className="fas fa-user-circle" to="/Loguin"></i>
              </Link>
            ) : (
              <div>
                <Link to="/user_profile" className="text-light ">
                  {store.name}
                  <button
                    className="btn btn-outline-light mx-2 "
                    onClick={logout}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

//<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
