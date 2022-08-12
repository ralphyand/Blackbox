import React, { useState } from "react";
import "../../styles/userProfile.css";

export const User_profile = () => {
  const [info, setInfo] = useState({});

  const handleChange = (event) => {
    // console.log(event.target.value);
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    // console.log(info);
    changeInfo(info);
  };

  const changeInfo = (info) => {
    fetch(process.env.BACKEND_URL + "/api/user_profile", {
      method: "GET",
      // body: JSON.stringify(info),
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
      .then((info) => {
        navigate("/login");
        console.log(info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid fondo">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card my-5 py-3 px-4 usercard">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU99EN1Ah3Z89I4s7BOp_rrPmzpi0O0nfyA&usqp=CAU"
                className="card-img-top rounded-circle"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-center fs-4 fw-bold">
                  María Casas
                </p>
                <p className="text-center">maria@user.com</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                {/* <a href="#" className="btn btn-outline-primary">
                    Editar perfil
                  </a> */}
              </div>
            </div>
          </div>
          {/* F O R M U L A R I O */}
          <div className="col-md-5 usercard">
            <form
              className="row g-3 tabla my-5 py-3 px-5 rounded"
              onSubmit={sendInfo}
            >
              <h6 className="fs-5 text-center">Modificar mis datos</h6>
              <label>Nombre</label>
              <input
                type="name"
                className="form-control mt-1"
                id="nameInput"
                // placeholder="Escribe el nombre"
                onChange={handleChange}
              />
              <label>Apellido</label>
              <input
                type="lastname"
                className="form-control mt-1"
                id="lastnameInput"
                // placeholder="Escribe el apellido"
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                id="EmailInput"
                // placeholder="Correo electrónico"
                onChange={handleChange}
              />
              <label>Contraseña nueva</label>
              <input
                type="password"
                className="form-control mt-1"
                // placeholder="Escribe la contraseña nueva"
                onChange={handleChange}
              />
              <label>Repitir contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                // placeholder="Confirma la nueva contraseña"
                onChange={handleChange}
              />
              <div>
                <label>Sobre ti</label>
                <textarea
                  className="form-control mt-1"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Escribe algo sobre ti"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="input-group mb-2">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                />
                <label className="input-group-text" for="inputGroupFile02">
                  Cambiar foto
                </label>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-outline-primary">
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

{
  /* 
    <div className="bgprofileimg d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="imgfondo registro card mb-5 p-5 bg-dark bg-gradient text-white col-md-8">
  <div className="row justify-content-around">
<div className="col-5">
  <p>Mi perfil</p>
  <p>Notificaciones</p>
  <p>Cerrar sesión</p>
</div>
<div className="col-5">
  <p>Mis cursos</p>
</div>
</div>
</div>
</div> */
}
