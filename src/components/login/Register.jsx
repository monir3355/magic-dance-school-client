import React from "react";
import { useForm } from "react-hook-form";
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
                    <label htmlFor="photo">Photo URL</label>
                  </div>
                  <input
                    type="url"
                    name="photo"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="photo"
                    {...register("photo", { required: true })}
                  />
                  {errors.RecipeName && (
                    <span className="text-red-600">
                      <small>Recipe Name is required</small>
                    </span>
                  )}
                </div>
              </div>
              {/*Row 2 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Password">Password</label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      <small>Password is required</small>
                    </span>
                  )}
                </div>
                <div className="space-y-2 lg:w-1/2">
                  <div>
                    <label htmlFor="Password">Confirm Password</label>
                  </div>
                  <input
                    type="password"
                    name="Confirm password"
                    className="w-full py-2 rounded-md pl-4"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: true })}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-600">
                      <small>Confirm Password is required</small>
                    </span>
                  )}
                </div>
              </div>
              {/* Row 5 */}
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
              {/* Row 6 */}
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
        </div>
      </div>
    </>
  );
};

export default Register;
