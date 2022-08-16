
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../component/card";


//import Payment from "../component/payment";
import "../../styles/home.css";

export const My_course = () => {
    const [detalles, setDetalles] = useState([]);
    const params = useParams();
  
    useEffect(() => {
      fetch(process.env.BACKEND_URL + "/api/private-course" ,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
           'Authorization': 'Bearer ' + localStorage.getItem("jwt-token")
        },
      })
        .then((data) => data.json())
        .then((data) => setDetalles(data));
    }, []);
  
    return detalles.map((course,index)=>{
        return <Card
        id={course.id}
        price={course.price}
        name={course.name}
        description={course.description}
        imagen={course.imagen}
      />
    }) 
  };

  
  
       