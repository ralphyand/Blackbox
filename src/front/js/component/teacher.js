import React from "react";
import "../../styles/teacher.css";

export const Teacher = () => (
  <div className="box">
    <div className="cardteacher">
      <div className="imgBx">
        <img
          src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="images"
        />
      </div>
      <div className="details">
        <h2>
          Moises Andrade
          <br />
          <span>Profesor</span>
        </h2>
      </div>
    </div>

    <div className="cardteacher">
      <div className="imgBx">
        <img
          src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="images"
        />
      </div>
      <div className="details">
        <h2>
          Elena
          <br />
          <span>Profesora</span>
        </h2>
      </div>
    </div>

    <div className="cardteacher">
      <div className="imgBx">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="images"
        />
      </div>
      <div className="details">
        <h2>
          Andrea Briseño
          <br />
          <span>Profesora</span>
        </h2>
      </div>
    </div>
  </div>
);

export default Teacher;
