import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GardenPlanner from "./component/garden_scheduler/GardenPlanner";
import HomePage from "./component/home/HomePage";
import { useDispatch, useSelector } from "react-redux";

import GardenPage from "./component/garden/GardenPage";
import axios from "axios";
import Planner from "./component/garden_scheduler/Planner";

function App() {
  const [userDetails, setUserDetails] = useState({
    gardens: [],
    userName: "",
    loginStatus: false,
  });
  const [refreshData, setRefreshData] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (refreshData) {
      setRefreshData(false);
      fetchData();
    }
  }, [refreshData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/get_user_data`, {
        withCredentials: true,
      });

      if (response.status === 200) {
        const user = response.data.gardens;
        console.log(user);
        setUserDetails({
          gardens: response.data["gardens"],
          userName: response.data.userName,
          loginStatus: true,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <HomePage
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          </div>
        }
      />
      <Route
        path="/garden/:id"
        element={
          <GardenPage
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            setRefreshData={setRefreshData}
          />
        }
      />
      <Route
        path="/garden/planner"
        element={
          <Planner userDetails={userDetails} setUserDetails={setUserDetails} />
        }
      ></Route>
    </Routes>
  );
}

export default App;
