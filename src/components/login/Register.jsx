import React from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, UpdateUser, setPUpdate } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully account create");
        UpdateUser(data.name, data.photo)
          .then(() => {
            console.log("Profile Updated");
            setPUpdate(new Date().getTime());
            navigate("/");
            const users = {
              image: data.photo,
              name: data.name,
              email: data.email,
              password: data.password,
              phone: data.phone,
              gender: data.gender,
              location: data.location,
              role: "student",
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(users),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire(
                    "Success!",
                    "User created successfully.",
                    "success"
                  );
                }
              });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="bg-gray-300 px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img className="h-16" src={logo} alt="" />
          </Link>
          <h4 className="hover:underline">
            <Link to="/login">Login Your account</Link>
          </h4>
        </div>
        <div className="lg:w-4/6 pb-16 px-6 lg:px-12 mx-auto">
          <h2 className="text-4xl font-semibold py-8">Registration Now</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="name">Name</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">
                      <small>Name is required</small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="photo">Your Email</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">
                      <small>Email is required</small>
                    </span>
                  )}
                </div>
              </div>
              {/* Row 2 */}
              <div className="space-y-2">
                <div>
                  <label htmlFor="photo">Photo URL</label>
                </div>
                <input
                  type="url"
                  name="photo"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="photo"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-600">
                    <small>Photo is required</small>
                  </span>
                )}
              </div>
              {/*Row 3 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Password">Password</label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      className="w-full py-2 rounded-md pl-4"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 15,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-3 cursor-pointer"
                    />
                  </div>
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">
                      <small>Password is required</small>
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 6 or More Password</small>
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 15 or less Password</small>
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      <small>
                        Please Enter one uppercase, one lowercase, one number &
                        special character{" "}
                      </small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Password">Confirm Password</label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      name="Confirm password"
                      className="w-full py-2 rounded-md pl-4"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        minLength: 6,
                        maxLength: 15,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-3 cursor-pointer"
                    />
                  </div>
                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-red-600">
                      <small>Confirm Password is required</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "minLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 6 or More Password</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "maxLength" && (
                    <span className="text-red-600">
                      <small>Please Enter 15 or less Password</small>
                    </span>
                  )}
                  {errors.confirmPassword?.type === "pattern" && (
                    <span className="text-red-600">
                      <small>
                        Please Enter one uppercase, one lowercase, one number &
                        special character{" "}
                      </small>
                    </span>
                  )}
                </div>
              </div>
              {/* Row 4 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Gender">Gender</label>
                  </div>
                  <select
                    defaultValue="Select Item"
                    {...register("gender", { required: true })}
                    className="w-full py-2 rounded-md pl-4"
                  >
                    <option disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="common">Common</option>
                  </select>
                </div>
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Phone">Phone</label>
                  </div>
                  <input
                    type="text"
                    name="Phone"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="Phone"
                    {...register("phone", { required: true })}
                  />
                </div>
              </div>
              {/* Row 5 */}
              <div className="space-y-2">
                <div>
                  <label htmlFor="Location">Location</label>
                </div>
                <input
                  type="text"
                  name="Location"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Location"
                  {...register("location", { required: true })}
                />
              </div>
              {/* Button */}
              <div>
                <input
                  value="Register"
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
          <p className="text-green-500">{success}</p>
        </div>
      </div>
    </>
  );
};

export default Register;
