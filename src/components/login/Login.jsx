import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { FaEye } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="bg-gray-300 px-4 lg:h-[100vh]">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img className="h-16" src={logo} alt="" />
          </Link>
          <h4 className="hover:underline">
            <Link to="/register">Create New Account</Link>
          </h4>
        </div>
        <div className="md:w-4/6 pb-16 px-6 md:px-12 mx-auto">
          <h2 className="text-4xl font-semibold py-8">Login Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="space-y-2">
                <div>
                  <label htmlFor="Email">Your Email</label>
                </div>
                <input
                  type="email"
                  name="Email"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">
                    <small>Email is required</small>
                  </span>
                )}
              </div>
              {/*Row 2 */}
              <div className="space-y-2">
                <div>
                  <label htmlFor="Password">Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <FaEye
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-3 cursor-pointer"
                  />
                </div>
                {errors.password && (
                  <span className="text-red-600">
                    <small>Password is required</small>
                  </span>
                )}
              </div>
              {/* Button */}
              <div>
                <input
                  value="Login"
                  type="submit"
                  className="button-primary w-full"
                />
              </div>
            </div>
          </form>
          <div className="divider">Or</div>
          <div>
            <SocialLogin />
          </div>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
