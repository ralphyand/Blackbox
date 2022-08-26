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
        navigate("/login");
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
      id="containerRegister template-bg-3 login1"
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
              pattern="(?=.[a-z])(?=.*[A-Z]).{2,}"
              required="required"
              title="El nombre debe contener al menos 1 letra mayúscula, 1 letra minúscula, 2 caracteres"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <label>Apellido</label>
            <input
              type="text"
              pattern="(?=.[a-z])(?=.*[A-Z]).{2,}"
              required="required"
              title="El apellido debe contener al menos 1 letra mayúscula, 1 letra minúscula, 2 caracteres"
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
                // pattern="[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{6,}$"
                required="required"
                // title="El email debe contener al menos 1 letra minúscula, @, 6 caracteres"
                className="form-control"
                id="EmailInput"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input-group form-group mt-3">
              <input
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}"
                required="required"
                title="La contraseña debe tener al menos 1 letra mayúscula, 1 letra minúscula, 1 número, 8 caracteres"
                type="password"
                className="form-control text-center p-3"
                name="password"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-dark rounded-pill m-3">
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
