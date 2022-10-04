import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/my_course.css";
import card_private, { Card_private } from "../component/card_private";
import "../../styles/home.css";

export const My_course = () => {
  const [detalles, setDetalles] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/private-course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt-token"),
      },
    })
      .then((data) => data.json())
      .then((data) => setDetalles(data));
  }, []);

  return detalles.map((course, index) => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="album py-3">
              <div className="row row-cols-1">
                <Card_private
                  id={course.id}
                  price={course.price}
                  name={course.name}
                  description={course.description}
                  imagen={course.imagen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

/* <Card_private
        id={course.id}
        price={course.price}
        name={course.name}
        description={course.description}
        imagen={course.imagen}
      /> */
