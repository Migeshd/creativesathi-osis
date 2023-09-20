import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
// import SignForms from "./components/auth/login/SignForms";
import Home from "./pages/Home";
import Loading from "./components/loadingEffect/loading";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/try1" element={<SignForms />} /> */}
          <Route path="/Home" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
