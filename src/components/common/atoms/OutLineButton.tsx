import React from "react";

type OutLineButtonProps = {
  onClick: () => void;
  label: string;
};

const OutLineButton: React.FC<OutLineButtonProps> = ({ onClick, label }) => {
  // console.log("onClick:", onClick);
  return (
    <button
      className="text-blue-600 border-2 border-blue-600 font-medium px-4 py-2 rounded-lg z-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OutLineButton;
