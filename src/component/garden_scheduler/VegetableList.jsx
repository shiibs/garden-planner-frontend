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
      <div className="bg-white p-10 rounded-md shadow-md w-full relative md:max-w-[60%] mx-auto">
        <button
          onClick={togglePopup}
          className="absolute top-5 right-5 text-orange-500 text-xl md:text-2xl cursor-pointer z-20 hover:white"
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <h2 className="font-bold text-xl md:text-2xl text-center pb-4">
          Plants
        </h2>
        <div className="text-center pb-6">
          <SpaceAvailable spaceUsed={spaceUsed} totalSpace={totalSpace} />
        </div>
        <div className="max-h-[300px] overflow-y-auto md:p-10">
          {apiData.length > 0 && // Check if apiData is not empty
            apiData.map((plant) => (
              <h4
                key={plant.id}
                className="hover:text-blue-700 cursor-pointer py-1 px-4"
              >
                <div className="flex justify-between pb-3">
                  {plant.name}{" "}
                  <span
                    className="border rounded-lg  ml-4 px-2 border-emerald-700"
                    onClick={() => handleAddVegetable(plant.id)}
                  >
                    {addedPlantList.some((item) => item.id === plant.id)
                      ? "Added"
                      : "Add"}
                  </span>
                </div>
              </h4>
            ))}
        </div>
      </div>
    </div>
  );
}
