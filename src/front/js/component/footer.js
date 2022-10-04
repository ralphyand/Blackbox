import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
  <footer className="navbar navbar-fixed-bottom bg-dark" id="footerPrincipal">
    <div className="container-fluid">
      <span className="footer-text text-light">© Black Box 2022</span>
      <span className="footer-text text-light">
        <i className="fab fa-instagram fa-lg mx-1"></i>
        <i className="fab fa-facebook fa-lg mx-1"></i>
        <i className="fab fa-twitter-square fa-lg mx-1"></i>
        <i className="fab fa-pinterest-square fa-lg ms-1 me-3"></i>
      </span>
    </div>
  </footer>
);
