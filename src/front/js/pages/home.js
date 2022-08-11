import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Card from "../component/card";
import Course from "../component/course";
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
          </div>
        </div>
      </div>
    </>
  );
};
