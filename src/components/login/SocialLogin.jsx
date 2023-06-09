import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { githubProvider, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const currentUSer = result.user;
        console.log(currentUSer);
        const savedUser = {
          name: currentUSer.displayName,
          email: currentUSer.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error.message));
  };
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
