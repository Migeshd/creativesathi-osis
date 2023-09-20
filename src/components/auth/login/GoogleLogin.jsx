import React, { useEffect } from "react";
import { auth, provider } from "../googlelogin/config";
import { signInWithPopup } from "firebase/auth";
import "firebase/auth";
import Home from "../../../pages/Home";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home");
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <>
      {value ? (
        <Home />
      ) : (
        <div className="flex justify-around">
          <button onClick={handleClick}>
            <img src="/assets/buttons/google.png" alt="sign in with google " />
          </button>
          <button onClick={handleClick}>
            <img
              src="/assets/buttons/facebook.png"
              alt="sign in with facebook "
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Google;
