import { useEffect, useState } from "react";
import Footer from "../home/Footer";

import Header from "../home/Header";
import NumberDropdown from "./NumberDropdown";
import SpaceAvailable from "./SpaceAvailable";
import axios from "axios";
import AddedVegetableList from "./AddedVegetableList";
import Notification from "../common/Notification";
import GenerateSchedule from "./GenerateSchedule";
import AddPlantButton from "./AddPlantButton";

export default function GardenPlanner({ userDetails }) {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);
  const [spaceUsed, setSpaceUsed] = useState(0);
  const [totalSpace, setTotalSpace] = useState(100);
  const [apiData, setApiData] = useState([]);
  const [addedPlantList, setAddedPlantList] = useState([]);
  const [notification, setNotification] = useState({});
  const [confirm, setConfirm] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/get_plants`);

        if (response.data) {
          // Check if response.data exists
          setApiData(response.data["plant_list"]);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newTotalSpace = rows * columns;
    setTotalSpace(newTotalSpace);
  }, [rows, columns]);

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setNotification(null);
    }, 3000);
    return () => clearTimeout(notificationTimer);
  }, [notification]);

  const handleSelectChangeRows = (e) => {
    setRows(e.target.value);
  };

  const handleSelectChangeColumns = (e) => {
    setColumns(e.target.value);
  };

  const handleAddVegetable = (id) => {
    if (spaceUsed < totalSpace) {
      const selectedPlant = apiData.find((plant) => plant.id === id);
      const newPlant = { ...selectedPlant, count: 1 };
      setAddedPlantList([...addedPlantList, newPlant]);
      setSpaceUsed(spaceUsed + 1);
    } else {
      setNotification({ type: "error", message: "No space left" });
    }
  };

  const handleConfirm = () => {
    setConfirm(!confirm);
  };

  return (
    <div className="mb-10 h-screen">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      {/* <Header isHomePage={false} /> */}
      <div className="p-4 ">
        <h3 className="text-center font-bold text-2xl md:text-3xl pb-6 pt-3 text-slate-800">
          Garden Planner
        </h3>
        <div className=" flex gap-2 md:gap-3 justify-center text-xl">
          <label className="pr-2">Space in Square foot</label>
          <NumberDropdown
            identifier="rows"
            onSelectChange={handleSelectChangeRows}
            defaultValue={rows}
          />
          <NumberDropdown
            identifier="columns"
            onSelectChange={handleSelectChangeColumns}
            defaultValue={columns}
          />
        </div>
        <div className="flex justify-center py-2 md:py-6 gap-2 md:gap-5">
          <SpaceAvailable spaceUsed={spaceUsed} totalSpace={totalSpace} />
          <AddPlantButton
            apiData={apiData}
            handleAddVegetable={handleAddVegetable}
            addedPlantList={addedPlantList}
            spaceUsed={spaceUsed}
            totalSpace={totalSpace}
          />
        </div>
      </div>
      <AddedVegetableList
        addedPlantList={addedPlantList}
        setAddedPlantList={setAddedPlantList}
        setNotification={setNotification}
        spaceUsed={spaceUsed}
        setSpaceUsed={setSpaceUsed}
        totalSpace={totalSpace}
      />

      {addedPlantList.length > 0 && (
        <div className="flex justify-center my-3">
          <button onClick={handleConfirm} className="start-now-button">
            Confirm
          </button>
        </div>
      )}

      {confirm && (
        <GenerateSchedule
          handleConfirm={handleConfirm}
          rows={rows}
          columns={columns}
          addedPlantList={addedPlantList}
          userDetails={userDetails}
        />
      )}
    </div>
  );
}
