import React from "react";

const Button = ({ text, className }) => {
  return (
    <>
      <button
        className={`px-3 py-1 text-base bg-white text-black font-semibold rounded-md ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
