import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Pagos } from "./pages/pagos";
import { Start_course } from "./pages/start_course";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Detalles } from "./pages/detalles";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./pages/login";
import { Cursos } from "./pages/cursos";
import { User_register } from "./pages/userRegister";
import { User_profile } from "./pages/userProfile";
import { My_course } from "./pages/my_course";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Start_course />} path="/start_course/:id" />
            <Route element={<User_profile />} path="/user_profile" />
            <Route element={<User_register />} path="/user_register" />
            <Route element={<Login />} path="/login" />
            <Route element={<Cursos />} path="/cursos" />
            <Route element={<My_course/>} path="/my_course" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Pagos />} path="/pagos/:idStripe" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Detalles />} path="/detalles/:id" />
            <Route element={<h1> not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
