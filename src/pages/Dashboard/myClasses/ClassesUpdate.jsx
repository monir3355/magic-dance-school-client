import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useMyClasses from "../../../hooks/useMyClasses";

const image_hosting_token = import.meta.env.VITE_img_api;
const ClassesUpdate = () => {
  const [classes] = useMyClasses();
  const [singleClass, setSingleClass] = useState([]);
  const { id } = useParams();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    const myClass = classes.find((cls) => cls._id === id);
    setSingleClass(myClass);
  }, [classes]);
  // console.log(singleClass);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const { class_name, available_seats, price, details } = data;
          const newClass = {
            class_name,
            image: imgURL,
            available_seats: parseInt(available_seats),
            price: parseInt(price),
            details,
            status: "pending",
          };
          axiosSecure.patch(`/classes/${id}`, newClass).then((data) => {
            // console.log(data.data);
            if (data.data.modifiedCount > 0) {
              reset();
              Swal.fire({
                title: "Success!",
                text: "You have successfully Update a class",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-6 text-center">
        Update a class
      </h2>
      <div className="md:w-5/6 bg-gray-300 p-6 md:p-12 mx-auto rounded-lg my-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="ClassName">Class name</label>
                </div>
                <input
                  type="text"
                  defaultValue={singleClass?.class_name}
                  name="ClassName"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Class name"
                  {...register("class_name", { required: true })}
                />
                {errors.class_name && (
                  <span className="text-red-600">
                    <small>Class Name is required</small>
                  </span>
                )}
              </div>
              <div className="space-y-1 md:w-1/2">
                <div>
                  <label htmlFor="ClassImage">Class Image</label>
                </div>
                <input
                  type="file"
                  name="ClassImage"
                  className="file-input w-full"
                  {...register("image", { required: true })}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="InstructorName">Instructor Name</label>
                </div>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="InstructorName"
                  className="w-full py-2 rounded-md pl-4"
                  {...register("instructor_name", { required: true })}
                  readOnly
                />
              </div>
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="InstructorEmail">Instructor Email</label>
                </div>
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="InstructorEmail"
                  className="w-full py-2 rounded-md pl-4"
                  {...register("email", { required: true })}
                  readOnly
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="Price">Available Seats</label>
                </div>
                <input
                  type="text"
                  defaultValue={singleClass?.available_seats}
                  name="AvailableSeats"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Available Seats"
                  {...register("available_seats", { required: true })}
                />
                {errors.available_seats && (
                  <span className="text-red-600">
                    <small>available seats is required</small>
                  </span>
                )}
              </div>
              <div className="space-y-2 md:w-1/2">
                <div>
                  <label htmlFor="Price">Price</label>
                </div>
                <input
                  type="text"
                  defaultValue={singleClass?.price}
                  name="Price"
                  className="w-full py-2 rounded-md pl-4"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-600">
                    <small>Price is required</small>
                  </span>
                )}
              </div>
            </div>
            {/* Row 4 */}
            <div className="space-y-2">
              <div>
                <label htmlFor="RecipeName">Class Details</label>
              </div>
              <textarea
                type="text"
                defaultValue={singleClass?.details}
                name="ClassDetails"
                id=""
                cols="30"
                rows="10"
                className="w-full rounded-md pl-4 pt-4"
                placeholder="Class Details"
                {...register("details", { required: true })}
              ></textarea>
              {errors.details && (
                <span className="text-red-600">
                  <small>Class Details is required</small>
                </span>
              )}
            </div>
            {/* Button */}
            <div>
              <input
                value="Update Class"
                type="submit"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ClassesUpdate;
