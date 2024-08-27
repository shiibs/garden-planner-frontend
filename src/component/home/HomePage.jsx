import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import HomeHowItWorks from "./HowItWorks";

export default function HomePage({ userDetails, setUserDetails }) {
  return (
    <div>
      <Header
        isHomePage={true}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <Hero />

      <Features />
      <HomeHowItWorks />
      <Footer />
    </div>
  );
}
