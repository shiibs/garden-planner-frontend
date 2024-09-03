import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import axios from "axios";

export default function User({ userDetails, setUserDetails, isHomePage }) {
  const [isopen, setIsopen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

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
    setIsopen(!isopen);
  };

  const toggleSubmenu = () => {
    setSubmenu(!submenu);
  };
  return (
    <div>
      {!isopen && (
        <button
          onClick={toggleDropDown}
          className="text-orange-500 text-2xl md:text-3xl hover:text-white"
        >
          <i className="bi bi-list md:hidden"></i>
          <i className="bi bi-person-circle hidden md:inline"></i>
        </button>
      )}

      {isopen && (
        <div className="mobile-menu fixed top-0 right-0 h-screen bg-[#003d4d] md:w-1/2 w-full z-10">
          <div className="logo-container flex justify-between p-10">
            <div className="text-2xl md:text-3xl">
              <h3>{userDetails.userName}</h3>
            </div>
            <button
              className=" text-white text-xl md:text-2xl cursor-pointer z-20 hover:text-orange-500"
              onClick={toggleDropDown}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div>
            <ul className="mx-10">
              {!isHomePage && (
                <li className="md:hidden">
                  <Link to={"/"} className="main-link-container">
                    Home
                  </Link>
                </li>
              )}
              <li>
                <div className="main-link-container pt-5">
                  <a href="#">Gardens</a>
                  <button
                    className="text-xl border-gray-600 hover:text-orange-500 cursor-pointer"
                    onClick={toggleSubmenu}
                  >
                    {submenu ? (
                      <i className="bi bi-dash-square"></i>
                    ) : (
                      <i className="bi bi-plus-square"></i>
                    )}
                  </button>
                </div>
                {submenu && (
                  <ul className="sub-menu">
                    {userDetails.gardens.length === 0 && <p>---</p>}
                    {userDetails.gardens.map((garden) => (
                      <li key={garden.id} className="garden-item">
                        <Link to={`/garden/${garden.id}`}>{garden.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={handleLogout}
              className="font-bold hover:text-orange-500 cursor-pointer p-10"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
