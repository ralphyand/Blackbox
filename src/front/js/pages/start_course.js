import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Start_course = () => {
  const [start_course, setStart_course] = useState();
  const params = useParams();
  const [active, setActive] = useState({
    index: 0,
    url: null,
  });
  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/course/" + params.id)
      .then((data) => data.json())
      .then((data) => setStart_course(data));
  }, []);

  return start_course ? (
    <div className="container">
      <div className=" text-center">
        <h1 id="nameCourse">{start_course.name}</h1>
        <div className="embed-responsive embed-responsive-16by9 pt-4">
          <div className="ratio ratio-21x9 p-5">
            {start_course.temario.videos ? (
              <iframe
                width="560"
                height="315"
                key={0}
                src={
                  active.url
                    ? active.url
                    : start_course.temario.videos[0].description
                }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            ) : (
              ""
            )}
          </div>
        </div>
        {start_course.temario ? (
          <div>
            <ul className="list-group mt-3 mb-3">
              {start_course.temario.videos.map((video, index) => {
                return (
                  <li
                    className={`list-group-item list-group-item-action list-group-item-dark pt-1 ${
                      active.index == index ? "active" : ""
                    }`}
                    aria-current={active.index == index ? "true" : ""}
                    onClick={() => {
                      setActive({ index: index, url: video.description });
                    }}
                  >
                    <i className="fas fa-video"> </i> {"  "} {"  "}
                    {video.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    <h1> </h1>
  );
};

//frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
