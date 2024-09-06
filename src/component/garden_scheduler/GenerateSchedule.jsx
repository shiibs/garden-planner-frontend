import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Login from "../user/Login";
import Spinner from "../common/Spinner";

export default function GenerateSchedule({
  handleConfirm,
  rows,
  columns,
  addedPlantList,
  userDetails,
}) {
  const [startDate, setStartDate] = useState(""); // Initially empty to allow date selection
  const navigate = useNavigate(); // Get history object
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const saveForm = async (formData, event) => {
    try {
      setLoading(true);
      const url = `/api/create_gardenLayout`;
      const requestDate = {
        ...formData,
        rows: rows,
        columns: columns,
        addedPlantList: addedPlantList,
      };
      const response = await axios.post(url, requestDate, {
        withCredentials: true,
      });

      if (response.status === 201) {
        const id = response?.data.gardenId;
        setLoading(false);
        navigate(`/garden/${id}`);
      }
    } catch (error) {
      console.log(error.response);
      navigate("/", {
        state: { type: "error", message: "Server error" },
      });
    }
  };

  return (
    <div>
      {userDetails.loginStatus ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-md max-w-3xl relative">
            <button
              onClick={handleConfirm}
              className="absolute top-5 right-5 text-orange-500 text-xl md:text-2xl cursor-pointer z-20 hover:white"
            >
              <i className="bi bi-x-lg"></i>
            </button>

            <form onSubmit={handleSubmit(saveForm)} className="p-8">
              <div className="mb-5">
                <label
                  htmlFor="gardenName"
                  className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Garden Name
                </label>
                <input
                  type="text"
                  id="gardenName"
                  placeholder="Enter name"
                  className={`input-btn ${errors.gardenName && "error"}`}
                  {...register("gardenName", {
                    required: "Garden name cannot be empty",
                  })}
                />
                {errors.gardenName && (
                  <p className="text-red-500">{errors.gardenName.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="startDate"
                  className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  min={today} // Only allow today and future dates
                  onChange={(e) => setStartDate(e.target.value)} // Update the date value
                  className={`input-btn ${errors.startDate && "error"}`}
                  {...register("startDate", {
                    required: "Please select a date",
                  })}
                />
                {errors.startDate && (
                  <p className="text-red-500">{errors.startDate.message}</p>
                )}
              </div>
              {loading && <Spinner />}
              <button type="submit" className="confirm-btn">
                Generate Schedule
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-md max-w-3xl relative">
            <button
              onClick={handleConfirm}
              className="absolute top-1 right-1 text-gray-500"
            >
              <AiOutlineClose size={10} />
            </button>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}
