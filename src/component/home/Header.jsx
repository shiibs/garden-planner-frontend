import { useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import { Link } from "react-router-dom";
import User from "../user/User";

import Login from "../user/Login";

export default function Header({ isHomePage, userDetails, setUserDetails }) {
  return (
    <div
      className={`flex w-full justify-between items-center h-20  z-10 text-white ${
        isHomePage ? "absolute" : "relative"
      } ${isHomePage ? "top-0" : ""} ${isHomePage ? "" : "bg-gray-800"}`}
    >
      <div>
        <h1 className="text-2xl md:text-3xl pl-4">GO-GARDENING...</h1>
      </div>
      <div className="flex gap-5">
        {!isHomePage ? (
          <Link to={"/"} className="font-bold text-xl mt-1">
            Home
          </Link>
        ) : (
          ""
        )}
        {userDetails.loginStatus ? (
          <User userDetails={userDetails} setUserDetails={setUserDetails} />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}
