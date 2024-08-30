import gardenpots from "../../assets/gardenpots.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full h-screen relative">
      <img
        src={gardenpots}
        alt="planters"
        className="w-full h-full object-cover"
      />

      <div className="absolute w-full h-full top-0 left-0 bg-slate-800/50"></div>
      <div className="absolute top-0 w-full h-full flex flex-col text-white text-center justify-center">
        <h1 className="text-center md:max-w-[80%] mx-auto text-2xl md:text-4xl">
          Plan, Grow, and Harvest Your Dream Vegetable Garden
        </h1>
        <p className="pt-3 text-sm md:text-xl max-w-[80%] md:max-w-[60%] mx-auto">
          Our smart garden planner helps you design, manage, and maximize your
          home vegetable garden, ensuring a continuous harvest all year round.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3 mx-auto">
          <Link to={"/garden/planner"} className="start-now-button">
            Start Planning
          </Link>
          <Link to={"/about"} className="learn-more-button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
