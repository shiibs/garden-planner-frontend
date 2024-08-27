import Footer from "../home/Footer";
import GardenLayout from "./GardenLayout";
import Header from "../home/Header";

export default function GardenPage({
  userDetails,
  setUserDetails,
  setRefreshData,
}) {
  return (
    <div>
      <Header
        isHomePage={false}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <GardenLayout setRefreshData={setRefreshData} />
      <Footer />
    </div>
  );
}
