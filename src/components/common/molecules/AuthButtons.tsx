import React from "react";
import PrimaryButton from "../atoms/PrimaryButton";

const AuthButtons = () => {
  return (
    <div className="flex gap-2">
      <PrimaryButton
        onClick={() => {
          console.log("Login");
        }}
        label={"Login"}
      />
      <PrimaryButton
        onClick={() => {
          console.log("Sing Up");
        }}
        label={"Sign Up"}
      />
    </div>
  );
};

export default AuthButtons;
