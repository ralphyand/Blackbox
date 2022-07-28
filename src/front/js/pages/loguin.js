import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import Card from "../component/card";
import "../../styles/loguin.css";

import "../../styles/home.css";

export const Loguin = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div id="form" className="container text-center ">
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
      </div>
    </>
  );
};
