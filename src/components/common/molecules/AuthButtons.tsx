import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";

const AuthButtons = () => {
  return (
    <div className="flex gap-2">
      <PrimaryButton onClick={"onClick"} label={"Login"} />
      <PrimaryButton onClick={"onClick"} label={"Sign Up"} />
    </div>
  );
};

export default AuthButtons;
