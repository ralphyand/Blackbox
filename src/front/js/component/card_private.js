import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/card_private.css";

export const Card_private = (props) => (
  <div class="card mb-3 " id="caja">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src={props.imagen}
          class="img-fluid rounded-start py-3 "
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title text-center">{props.name}</h4>
          <p class="card-text">{props.description}</p>
          <div className="btn-group">
            <Link to={`/Start_course/${props.id}`}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Comenzar</span>
              </button>
            </Link>
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
