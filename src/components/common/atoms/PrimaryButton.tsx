import React from "react";

const PrimaryButton = ({ onClick, label }) => {
  return (
    <button className="bg-gray-400 px-4 py-2 rounded-lg" onClick={onClick}>
      {label}
    </button>
  );
};

export default PrimaryButton;
