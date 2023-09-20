import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    // window.location.reload();
    navigate("/login");
  };
  return (
    <>
      <div>welcome</div>
      <button onClick={logout}>logout</button>
    </>
  );
};

export default Home;
