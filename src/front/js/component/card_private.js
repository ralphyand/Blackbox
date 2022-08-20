import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card_private = (props) => (
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="card shadow-sm">
          <img src={props.imagen} className="card-img-top" alt="..." />
          <h1 className="">{props.name}</h1>
          <div className="card-body">
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link to={`/Start_course/${props.id}`}>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text"> Comenzar</span>
                  </button>
                </Link>
              </div>
              <small className="text-muted">{props.price} €</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Card_private.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  imagen: PropTypes.string,
  price: PropTypes.number,
  video: PropTypes.string,
};

export default Card_private;