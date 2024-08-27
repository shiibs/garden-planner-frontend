import { Link } from "react-router-dom";
import login from "../../assets/home/log-in.png";
import select_plant from "../../assets/home/smart-farm.png";
import garden_layout from "../../assets/home/garden_layout.jpg";
import vegetables from "../../assets/home/vegetables.png";

export default function HomeHowItWorks() {
  return (
    <div className="py-40">
      <h2 className="text-center text-3xl font-bold">How It Works</h2>
      <div className="steps">
        <div className="step-box">
          <img src={login} alt="" />
          <div className="step">
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
          <img src={garden_layout} alt="" />
          <div className="step">
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
      <div className="flex justify-center">
        <Link to={"/about"} className="learn-more-button">
          Learn More
        </Link>
      </div>
    </div>
  );
}
