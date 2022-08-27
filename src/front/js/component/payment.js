import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

export default function Payment(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();
  useEffect(() => {
    console.log(props);
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(process.env.BACKEND_URL + "/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ id: props.idStripe }],
        }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        // color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      console.log(payload);
      // fecht para guardar la orden de compra
      fetch(process.env.BACKEND_URL + "/api/compra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt-token"),
        },
        body: JSON.stringify({
          price: props.price,
          course_id: props.id,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          navigate("/my_course");
        });
    }
  };

  return (
    <div className="center-card p-3" id="box">
      <form id="payment-form" onSubmit={handleSubmit}>
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="card-img-top"
            alt="..."
          />

          <div class="details">
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />

            <button
              disabled={processing || disabled || succeeded}
              className="btn btn-dark rounded-pill m-5 mx-2"
              id="submit"
            >
              <span id="button-text ">
                {processing ? <div id="spinner"></div> : "Pay now"}
              </span>
            </button>
          </div>
          {/* Show any error that happens when processing the payment */}
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          {/* Show a success message upon completion */}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded, see the result in your
            <a href={`https://dashboard.stripe.com/test/payments`}>
              {" "}
              Stripe dashboard.
            </a>{" "}
            Refresh the page to pay again.
          </p>
        </div>
      </form>
    </div>
  );
}
