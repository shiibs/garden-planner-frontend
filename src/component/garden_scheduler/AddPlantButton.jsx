import { useState } from "react";
import VegetableList from "./VegetableList";

export default function AddPlantButton({
  apiData,
  handleAddVegetable,
  addedPlantList,
  spaceUsed,
  totalSpace,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div>
      <div>
        <button
          className="start-now-button text-sm md:text-base"
          onClick={togglePopup}
        >
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
            spaceUsed={spaceUsed}
            totalSpace={totalSpace}
          />
        </div>
      )}
    </div>
  );
}
