import React from "react";

export const Login = () => {
  return (
    <div className="container-fluid">
      <div className="login row rounded justify-content-center py-2">
        <div className="imgPart col-md-5">
          <img
            src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="img-fluid border border-light"
            alt="..."
          />
        </div>
        <div className="inputPart col-md-5 border border-light pt-2">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Correo</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-dark rounded-pill">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
