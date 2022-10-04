import React, { useEffect, useState } from "react";
import Payment from "../component/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../../styles/pagos.css";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51LVGdOAWxURsmnxVuEmgDElOR88YSms9d8199nDEul665RQ2fzoczeCEp92YkusblX4BPJRBLkJLXcZmBPKQZt0000IkeUv2qX"
);

//cobro con tarjeta desde stripe
export const Pagos = () => {
  const params = useParams();
  const [detalles, setDetalles] = useState();

  useEffect(() => {
    fetch(process.env.BACKEND_URL + "/api/course/" + params.id)
      .then((data) => data.json())
      .then((data) => setDetalles(data));
  }, []);

  return detalles ? (
    <div id="tarjetadePago" className=" text-center ">
      <Elements stripe={stripePromise}>
        <Payment
          id={detalles.id}
          price={detalles.price}
          idStripe={detalles.codigodepago_id}
        />
      </Elements>
    </div>
  ) : (
    <div> cargando...</div>
  );
};

/*<div id="trajetadePago" className=" text-center ">
                <Elements stripe={stripePromise}>
                  <Payment idStripe={params.idStripe} />
                </Elements>
              </div>
            </div> */
