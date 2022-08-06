import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/user_register.css";

export const User_register = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    // console.log(data);
    createUser(data);
  };

  const createUser = (data) => {
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (!resp.ok)
          //comprobamos si han habido errores
          throw new Error("Usuario ya creado anteriormente"); //creamos un objeto de tipo Error
        return resp.json();
      })
      .then((data) => {
        navigate("/");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      // id="login1"
      className="imgFondo d-flex flex-column min-vh-100 justify-content-center align-items-center"
      id="template-bg-3 login1"
    >
      <div className="registro card mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
        <div className="card-header text-center">
          <h3>Registro de usuario</h3>
        </div>
        <div className="card-body mt-3">
          <form onSubmit={sendInfo}>
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              id="lastnameInput"
              name="lastname"
              placeholder="Apellido"
              onChange={handleChange}
            />
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={handleChange}
              />
              <small id="emailHelp" className="text-light form-text"></small>
            </div>
            <div className="input-group form-group mt-3">
              <input
                type="password"
                className="form-control text-center p-3"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-3 w-100 p-2">
                Registrarse
              </button>
              <small
                id="passworderror"
                className="text-light form-text"
              ></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
