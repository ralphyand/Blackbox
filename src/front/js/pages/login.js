import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Solo las letras y la longitud deben tener un mínimo de 8 caracteres y un máximo de 22 caracteres"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
    if (actions.login(email, password)) {
      navigate("/");
    }
  };

  // if (store.token && store.token != "" && store.token != undefined)
  //   navigate.push("/");

  return (
    <div
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      id="template-bg-3"
    >
      <div className="cardLogin mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
        <div className="card-header text-center">
          <h3>Iniciar sesión </h3>
        </div>
        <div className="card-body mt-3">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-light form-text">
                {emailError}
              </small>
            </div>
            <div className="input-group form-group mt-3">
              <input
                type="password"
                value={password}
                className="form-control text-center p-3"
                placeholder="Contraseña"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-light form-text">
                {passwordError}
              </small>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-3 w-100 p-2">
                Acceder
              </button>
            </div>
          </form>

          <div className="text-danger"></div>
        </div>
      </div>
    </div>
  );
};
