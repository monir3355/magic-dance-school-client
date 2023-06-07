import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const handleGoogle = () => {};
  const handleGithub = () => {};
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <button
          onClick={handleGoogle}
          className="button-primary w-full flex justify-center"
        >
          <FaGoogle className="text-2xl" />{" "}
          <span className="ml-2">Login With Google</span>
        </button>
        <button
          onClick={handleGithub}
          className="button-primary w-full flex justify-center"
        >
          <FaGithub className="text-2xl" />{" "}
          <span className="ml-2">Login With Github</span>
        </button>
        <button
          onClick={handleGithub}
          className="button-primary w-full flex justify-center"
        >
          <FaFacebook className="text-2xl" />{" "}
          <span className="ml-2">Login With Facebook</span>
        </button>
      </div>
      {/* <p className="text-red-500 text-center">{error}</p> */}
    </div>
  );
};

export default SocialLogin;
