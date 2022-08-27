import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/userProfile.css";

export const User_profile = () => {
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { store } = useContext(Context);

  useEffect(() => {
    if (!localStorage.getItem("jwt-token")) {
      navigate("/login");
    }
    //fetch consultar datos del user
    fetch(process.env.BACKEND_URL + "/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt-token"),
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const sendData = (event) => {
    event.preventDefault();
    // console.log(info);
    changeInfo(data);
  };

  const changeInfo = (data) => {
    fetch(process.env.BACKEND_URL + "/api/user_profile", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + store.token,
      },
    })
      .then((resp) => {
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
    <div>
      <div className="container-fluid fondo">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form
              className="row g-3 tabla my-5 py-3 px-5 rounded bg-dark bg-gradient text-white"
              onSubmit={sendData}
            >
              <div className="card-header text-center">
                <h3>Modificar mis datos</h3>
              </div>
              <label>Nombre</label>
              <input
                defaultValue={user.name}
                type="name"
                className="form-control mt-1"
                id="nameInput"
                name="name"
                // placeholder={user.name}
                onChange={handleChange}
              />
              <label>Apellido</label>
              <input
                defaultValue={user.lastname}
                type="lastname"
                className="form-control mt-1"
                id="lastnameInput"
                name="lastname"
                // placeholder={user.lastname}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                defaultValue={user.email}
                type="email"
                className="form-control mt-1"
                id="EmailInput"
                name="email"
                // placeholder={user.email}
                onChange={handleChange}
              />
              <label>Contraseña nueva</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                onChange={handleChange}
              />
              <label>Repetir contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                // placeholder="Confirma la nueva contraseña"
                onChange={handleChange}
              />

              <div className="col-12 text-end">
                <button type="submit" className="btn btn-dark rounded-pill m-3">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
