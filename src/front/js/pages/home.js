import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Card from "../component/card";
import Course from "../component/course";
import logotipo from "../../img/logotipo.png";
//import Payment from "../component/payment";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const courseFiltrados = store.course.filter((curso) => curso.price < 10);
  return (
    <>
      <div className="carousel text-center">
        <Carousel />
        <div className="container">
          <div className="col">
            <div className="album py-3 bg-light">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {courseFiltrados.map((course) => {
                  return (
                    <Card
                      id={course.id}
                      price={course.price}
                      name={course.name}
                      description={course.description}
                      imagen={course.imagen}
                    />
                  );
                })}
              </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">
                  And lastly, this one.{" "}
                  <span class="text-muted">Checkmate.</span>
                </h2>
                <p class="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div class="col-md-5">
                <div class="card text-bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">
                  Oh yeah, it’s that good.{" "}
                  <span class="text-muted">See for yourself.</span>
                </h2>
                <p class="lead">
                  Another featurette? Of course. More placeholder content here
                  to give you an idea of how this layout would work with some
                  actual real-world content in place.
                </p>
              </div>
              <div class="col-md-5 order-md-1"></div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">
                  And lastly, this one.{" "}
                  <span class="text-muted">Checkmate.</span>
                </h2>
                <p class="lead">
                  And yes, this is the last block of representative placeholder
                  content. Again, not really intended to be actually read,
                  simply here to give you a better view of what this would look
                  like with some actual content. Your content.
                </p>
              </div>
              <div class="col-md-5">
                <div class="card text-bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <hr class="featurette-divider" />
          </div>
        </div>
      </div>
    </>
  );
};
