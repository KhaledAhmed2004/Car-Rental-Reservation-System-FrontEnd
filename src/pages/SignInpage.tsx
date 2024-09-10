import React from "react";

const SignInpage = () => {
  return (
    <div className="h-screen w-full flex items-center">
      <div className="h-[60vh] w-[60%] bg-red-200 mx-auto items-center justify-center rounded-lg flex">
        <div className="w-[60%] h-full bg-red-300 flex items-center justify-center text-center mx-auto">
          <div className="">
            <h3 className="text-lg font-semibold text-center py-2">Sign In</h3>
            <form className="w-full px-20 space-y-3">
              <input
                className="p-2 rounded-lg w-full"
                placeholder="Email..."
                type="email"
              />
              <input
                className="p-2 rounded-lg w-full"
                placeholder="Password..."
                type="password"
              />
              <button className="bg-gray-400 rounded-lg" type="submit">
                Sign In
              </button>
            </form>
            <a href="">Forget Password</a>
          </div>
        </div>
        <div className="w-[40%] bg-red-400 h-full items-center justify-center text-center flex p-6">
          <div>
            <h3 className="text-2xl font-semibold">Hello and Welcome</h3>
            <p>Enter your personal ditels and Start joruney with us</p>
            <button className="bg-gray-400 rounded-lg" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInpage;
