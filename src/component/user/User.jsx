import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import axios from "axios";

export default function User({ userDetails, setUserDetails }) {
  const [isOpen, setIsopen] = useState(false);

  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleLogout = async () => {
    try {
      const response = await axios.post(`/api/logout`);

      if (response.status === 200) {
        setUserDetails({
          gardens: [],
          userName: "",
          loginStatus: false,
        });
        navigate("/", {
          state: { type: "success", message: "logged out" },
        });
      }
    } catch (error) {
      navigate("/", {
        state: { type: "error", message: "Internal error" },
      });
    }
  };

  const toggleDropDown = () => {
    setIsopen(!isOpen);
  };
  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleDropDown}
          className="text-orange-500 text-xl md:text-2xl hover:text-white"
        >
          <i class="bi bi-person-circle"></i>
        </button>
      )}

      {isOpen && (
        <div className="garden_list ">
          <button
            onClick={toggleDropDown}
            className="absolute top-5 right-2 text-gray-300"
          >
            {" "}
            {/* Position close button absolutely */}
            <AiOutlineClose size={20} />
          </button>
          <h3>{userDetails.userName}</h3>
          <h3>Gardens</h3>
          <ul className="my-4">
            {userDetails.gardens.length === 0 && <p>---</p>}
            {userDetails.gardens.map((garden) => (
              <li key={garden.id} className="garden-item">
                <Link to={`/garden/${garden.id}`}>{garden.name}</Link>
              </li>
            ))}
          </ul>
          <button onClick={handleLogout} className="button2 m-3 px-3">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
