import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Teacher from "../component/teacher";
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
      <div className="carousel text-center" id="homeOne">
        <Carousel />

        <div className="container ">
          <h2 id="nuestrosCursos"> Nuestros cursos más economicos </h2>
          <div className="col">
            <div className="album py-3 ">
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

            <hr className="featurette-divider " />
            <div className="row featurette" id="cardseg">
              <div className="col-md-7 ">
                <h2 className="featurette-heading fw-normal lh-1">
                  Muestra el mundo desde el lente de tu camara{" "}
                </h2>
                <p className="lead">
                  Te gustaria hacer las mejores fotos en cada viaje?, desde el
                  móvil, o cualquier camara?, estas en el lugar adecuado, aquí
                  aprenderas todo lo que necesitas para hacer tus fotografias
                  más perfectas. desde lo más basico a los fundamentos más
                  importantes.
                </p>
              </div>
              <div className="col-md-5">
                <div className="card text-bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1460134846237-51c777df6111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">
                  Black Box y sus principios{" "}
                </h2>
                <p className="lead">
                  La plataforma nace de la idea de llegar a cientos de alumnos
                  en cualquier lugar del mundo, de una forma didáctica y
                  sencilla, con el fin de compaginar la vida diaria con el
                  apasionante mundo de la fotografia, nuestro lema es lograr que
                  nuestros estudiantes puedan plasmar cualquier foto desde un
                  modo profesional.
                </p>
              </div>

              <div className="lp-element lp-pom-block " id="lp-pom-block-141">
                <div id="lp-pom-block-141-color-overlay img-fluid">
                  <div className="texto-encima"></div>

                  <div className="centrado text-light">
                    {" "}
                    Bienvenido,fotógrafo{" "}
                  </div>
                </div>
                <div className="lp-pom-block-content"></div>
              </div>
              <hr className="featurette-divider" />
              <div className="col-md-5 order-md-1">
                <div className="card text-bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1563404203912-0b424db17de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  Los mejores resultados, los encontraras aqui{" "}
                </h2>
                <p className="lead">
                  Nuestros alumnos son los más destacados, por la pasion que
                  sienten al tomar su primera fotografia, cada resultado es un
                  paso más a la perfección, no dudes en comenzar un camino tan
                  encantador como lo es plasmar en una imagen tus pensamientos y
                  lo más importante, el arte de hacerlo bien y con las mejores
                  herramientas.
                </p>
              </div>
              <div className="col-md-5">
                <div className="card text-bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1558023567-20c42af0b4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    class="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <hr className="featurette-divider" />
          </div>
        </div>
      </div>
      <div className="container-fluid " id="teachercontainer">
        <Teacher />
      </div>
    </>
  );
};
