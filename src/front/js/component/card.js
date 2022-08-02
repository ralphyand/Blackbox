import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => (
  <div className="col">
    <div className="card shadow-sm">
      <img src={props.imagen} className="card-img-top" alt="..." />
      <h1 className="">{props.name}</h1>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Detalles
            </button>
          </div>
          <small className="text-muted">{props.time}</small>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imagen: PropTypes.string,
  time: PropTypes.string,
};

export default Card;
