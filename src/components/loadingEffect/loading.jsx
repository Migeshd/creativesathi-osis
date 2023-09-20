import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center m-auto p-auto align-center h-screen mb-[50%]">
      <div className="spinner">
        <span>
          <img src="/assets/logo/logo2.png" alt="" />
        </span>
        <span>&nbsp; WELCOME TO&nbsp;</span>
        <span>O</span>
        <span>S</span>
        <span>I</span>
        <span>S</span>
      </div>
    </div>
  );
};

export default Loading;
