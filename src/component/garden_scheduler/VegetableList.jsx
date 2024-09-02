import { AiOutlineClose } from "react-icons/ai";
import SpaceAvailable from "./SpaceAvailable";

export default function VegetableList({
  togglePopup,
  apiData,
  handleAddVegetable,
  addedPlantList,
  spaceUsed,
  totalSpace,
}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded-md shadow-md w-full relative md:max-w-[60%] mx-auto">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500"
        >
          {" "}
          {/* Position close button absolutely */}
          <AiOutlineClose size={20} />
        </button>
        <h2 className="font-bold text-xl text-center pb-4">Plants</h2>
        <SpaceAvailable
          spaceUsed={spaceUsed}
          totalSpace={totalSpace}
          classNamepb-8
        />
        <div className="max-h-[300px] overflow-y-auto">
          {apiData.length > 0 && // Check if apiData is not empty
            apiData.map((plant) => (
              <h4
                key={plant.id}
                className="hover:text-blue-700 cursor-pointer py-1 px-4"
              >
                <div className="flex justify-between">
                  {plant.name}{" "}
                  <span
                    className="border rounded-lg  ml-4 px-2 border-emerald-700"
                    onClick={() => handleAddVegetable(plant.id)}
                  >
                    {addedPlantList.some((item) => item.id === plant.id)
                      ? "added"
                      : "add"}
                  </span>
                </div>
              </h4>
            ))}
        </div>
      </div>
    </div>
  );
}
