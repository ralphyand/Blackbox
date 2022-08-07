import React from "react";
import "../../styles/userProfile.css";

export const User_profile = () => {
  return (
    <div className="bgprofileimg d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="imgfondo registro card mb-5 p-5 bg-dark bg-gradient text-white col-md-8">
        <div className="row justify-content-around">
          <div className="col-5">
            <p>Mi perfil</p>
            <p>Fotografía</p>
            <p>Seguridad de la cuenta</p>
            <p>Privacidad</p>
            <p>Notificaciones</p>
            <p>Cerrar sesión</p>
          </div>
          <div className="col-5">
            <p>Mis cursos</p>
          </div>
        </div>
      </div>
    </div>
  );
};
