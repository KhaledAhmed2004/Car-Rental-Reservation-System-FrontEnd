import React from "react";

type PrimaryButtonProps = {
  onClick: () => void;
  label: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg
       z-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
