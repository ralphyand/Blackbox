import React from "react";
import PropTypes from "prop-types";

const Course = (props) => {
  return (
    <div className="col-3 px-1 mt-1">
      <div className="card border border-dark">
        <img
          src="https://picsum.photos/200/130"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <a href="#" className="btn btn-dark rounded-pill">
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
};

// Course.propTypes = {
//   image: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
//   id: PropTypes.number,
// };

export default Course;
