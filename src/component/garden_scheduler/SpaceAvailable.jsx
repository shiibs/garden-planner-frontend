import { useState } from "react";
import VegetableList from "./VegetableList";
import add from "../../assets/planner/add.png";

export default function SpaceAvailable({
  spaceUsed,
  totalSpace,
  apiData,
  handleAddVegetable,
  addedPlantList,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="m-4">
      <div className="flex justify-center items-center text-xl gap-5 py-4">
        <p>
          Space used: {spaceUsed}/{totalSpace}{" "}
        </p>

        <button className="start-now-button" onClick={togglePopup}>
          Add plants
        </button>
      </div>

      {showPopup && (
        <div className="flex justify-between ">
          <VegetableList
            togglePopup={togglePopup}
            apiData={apiData}
            handleAddVegetable={handleAddVegetable}
            addedPlantList={addedPlantList}
          />
        </div>
      )}
    </div>
  );
}
