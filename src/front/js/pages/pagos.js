import React, { useContext, useState } from "react";
import Payment from "../component/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../../styles/pagos.css";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51LVGdOAWxURsmnxVuEmgDElOR88YSms9d8199nDEul665RQ2fzoczeCEp92YkusblX4BPJRBLkJLXcZmBPKQZt0000IkeUv2qX"
);

export const Pagos = () => {
  const params = useParams();
  return (
    <div id="trajetadePago" className=" text-center ">
      <Elements stripe={stripePromise}>
        <Payment idStripe={params.idStripe} />
      </Elements>
    </div>
  );
};

/*<div id="trajetadePago" className=" text-center ">
                <Elements stripe={stripePromise}>
                  <Payment idStripe={params.idStripe} />
                </Elements>
              </div>
            </div> */
