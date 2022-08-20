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
        <div className="">
          <a href="/">
            <img src={logotipo} alt="Bootstrap" width="80" height="40" />
          </a>
        </div>
        <div className="d-flex justify-content-between">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ">
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

              <form className="d-flex" role="search">
                {!store.token ? (
                  <Link to="/Login" className="btn btn-outline-light">
                    <i className="fas fa-user-circle" to="/Loguin"></i>
                  </Link>
                ) : (
                  <div className="text-light m-1 ">
                    <Link to="/user_profile" className="text-light ">
                      {store.name}
                    </Link>
                    <button
                      className="btn btn-outline-light mx-2 "
                      onClick={logout}
                    >
                      <i className="fas fa-sign-out-alt"></i>
                    </button>

                    <Link
                      to={`/my_course`}
                      className="nav-link active"
                      id="NombredelUsuario"
                    >
                      mis cursos
                    </Link>
                  </div>
                )}
              </form>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

//<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
