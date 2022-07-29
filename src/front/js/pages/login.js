import React from "react";

export const Login = () => {
  return (
    <div className="container-fluid my-5 pt-5">
      <div className="container my-3">
        <div className="login row rounded justify-content-center py-3">
          <p className="row justify-content-center text-light">
            Inicio de sesión
          </p>
          <div className="imgPart col-md-5">
            <img
              src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm90b2dyYWYlQzMlQURhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
            <div className="d-flex justify-content-center mt-5">
              <button type="button" className="btn btn-dark rounded-pill">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
