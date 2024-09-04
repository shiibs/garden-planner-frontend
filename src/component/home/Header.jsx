import { Link } from "react-router-dom";
import User from "../user/User";

import Login from "../user/Login";

export default function Header({ isHomePage, userDetails, setUserDetails }) {
  return (
    <div
      className={`flex w-full justify-between items-center h-20 px-2 md:px-6  z-10 text-white ${
        isHomePage ? "absolute" : "relative"
      } ${isHomePage ? "top-0" : ""} ${isHomePage ? "" : "bg-slate-200"}`}
    >
      <div>
        {isHomePage ? (
          <h1 className="text-xl md:text-3xl">GO-GARDENING...</h1>
        ) : (
          <h1 className="text-xl md:text-3xl text-[#003d4d]">
            GO-GARDENING...
          </h1>
        )}
      </div>
      <div className="flex gap-5">
        {!isHomePage ? (
          <Link
            to={"/"}
            className="text-orange-500 hidden md:inline text-3xl hover:text-white"
          >
            <i class="bi bi-house-door-fill"></i>
          </Link>
        ) : (
          ""
        )}
        {userDetails.loginStatus ? (
          <User
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            isHomePage={isHomePage}
          />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
