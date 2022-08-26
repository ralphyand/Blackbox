import React from "react";
import "../../styles/teacher.css";

export const Teacher = () => (
  <div className="box">
    <div className="cardteacher">
      <div className="imgBx">
        <img
          src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
          src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
          src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="images"
        />
      </div>
      <div className="details">
        <h2>
          Andrea Briseño
          <br />
          <span>Profesor</span>
        </h2>
      </div>
    </div>
  </div>
);

export default Teacher;
