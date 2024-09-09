import Footer from "../home/Footer";
import Header from "../home/Header";
import HowItWorks from "./HowItWorks";

export default function LearnMore({ userDetails }) {
  return (
    <div>
      <Header userDetails={userDetails} />
      <HowItWorks />
      <Footer />
    </div>
  );
}
