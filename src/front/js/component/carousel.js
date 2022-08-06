import React from "react";
import "../../styles/carousel.css";

export const Carousel = () => (
  <div className="carousel ml-1">
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active ">
          <img
            src="https://images.unsplash.com/photo-1506434304575-afbb92660c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="d-block w-100  "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>
              "Tienes que pedirte más a ti mismo. Tienes que empezar a buscar
              fotografías que nadie más pueda hacer. Tienes que coger tus
              herramientas e ir más allá."
            </h5>
            <p>William Albert Allard</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img
            src="https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="d-block w-100 "
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>
              "Se atrevido, se diferente, se poco práctico, se cualquier cosa
              que asegure tu objetivo y tu visión imaginativa frente a los
              jugadores seguros, las criaturas comunes, los esclavos de lo
              ordinario."
            </h5>
            <p>Peter Lindbergh</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1612547036242-77002603e5aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>
              Muchos fotógrafos piensan que si compran una cámara mejor serán
              capaces de hacer mejores fotos. Una cámara mejor no hará nada por
              ti si no hay nada en tu cabeza o en tu corazón."
            </h5>
            <p>Arnold Newman</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

export default Carousel;
