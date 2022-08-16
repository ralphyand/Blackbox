import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Start_course = () => {
  const [start_course, setStart_course] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/course/" + params.id)
      .then((data) => data.json())
      .then((data) => setStart_course(data));
  }, []);

  return start_course ? (
    <div className="container">
      <div className=" text-center">
        <h1 id="nameCourse">{start_course.name}</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <div class="ratio ratio-21x9 p-5">
            {start_course.temario.videos.map((video, index) => {
              return (
                <iframe
                  width="560"
                  height="315"
                  key={index}
                  src={video.description}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              );
            })}
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h3 class="accordion-header " id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <h3>
                  {start_course.temario.name} <i class="fas fa-camera"></i>
                </h3>
              </button>
            </h3>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <h3>{start_course.temario.description} </h3>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <h3>
                  {start_course.temario.name} <i class="fas fa-camera"></i>
                </h3>
              </button>
            </h3>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <h3>{start_course.temario.name}</h3>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <h3>
                  {start_course.temario.name} <i class="fas fa-camera"></i>
                </h3>
              </button>
            </h3>

            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <h3>{start_course.temario.description} </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container"></div>
      </div>
    </div>
  ) : (
    <h1> NO HAY CONTENIDO PARA ESTE CURSO </h1>
  );
};

//frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
