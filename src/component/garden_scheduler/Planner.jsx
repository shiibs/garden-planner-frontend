import GardenPlanner from "./GardenPlanner";
import Header from "../home/Header";
import Footer from "../home/Footer";

export default function Planner({ userDetails, setUserDetails }) {
  return (
    <div className="wrapper">
      <Header
        isHomePage={false}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <GardenPlanner userDetails={userDetails} />

      <Footer />
    </div>
  );
}
