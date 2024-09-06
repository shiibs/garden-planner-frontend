import { Link } from "react-router-dom";
import login from "../../assets/home/log-in.png";
import select_plant from "../../assets/home/smart-farm.png";
import garden_layout from "../../assets/home/garden_layout.jpg";
import vegetables from "../../assets/home/vegetables.png";

export default function HomeHowItWorks() {
  return (
    <div className="py-20 md:py-40">
      <h2 className="text-center text-3xl font-bold">How It Works</h2>
      <div className="steps">
        <div className="step-box">
          <div className="step md:hidden block">
            <h3>Step 1</h3>
            <p>Sign up with google.</p>
          </div>
          <img src={login} alt="" />
          <div className="step hidden md:block">
            <h3>Step 1</h3>
            <p>Sign up with google.</p>
          </div>
        </div>
        <div className="step-box">
          <div className="step">
            <h3>Step 2</h3>
            <p>Enter your garden space and select your plants.</p>
          </div>
          <img src={select_plant} alt="" />
        </div>
        <div className="step-box">
          <div className="step md:hidden block">
            <h3>Step 3</h3>
            <p>Get your custom garden layout and schedule.</p>
          </div>
          <img src={garden_layout} alt="" />
          <div className="step hidden md:block">
            <h3>Step 3</h3>
            <p>Get your custom garden layout and schedule.</p>
          </div>
        </div>
        <div className="step-box">
          <div className="step">
            <h3>Step 4</h3>
            <p>Manage your garden and enjoy continuous harvests.</p>
          </div>
          <img src={vegetables} alt="" />
        </div>
      </div>

      <div className="cta text-center mt-20">
        <h3 className="text-2xl md:text-3xl  font-bold text-gray-800 mb-4">
          Ready to Start Your Garden?
        </h3>
        <p className="text-gray-600 mb-6 text-base md:text-xl max-w-[80%] mx-auto">
          Sign up now and start your home gardening journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center max-w-[60%] mx-auto">
          <Link
            to={"/garden/planner"}
            className="btn1 bg-emerald-600 hover:bg-emerald-800"
          >
            Get Started
          </Link>
          <Link to={"/about"} className="btn1">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
