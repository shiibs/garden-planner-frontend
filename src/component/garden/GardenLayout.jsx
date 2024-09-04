import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GardenLayoutTable from "./GardenLayoutTable";
import DeleteGardenButton from "./DeleteGardenButton";

export default function GardenLayout({ setRefreshData }) {
  const params = useParams();
  const [garden, setGarden] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN");
  };

  useEffect(() => {
    const fetchGardenLayout = async () => {
      try {
        const url = `/api/garden_layout/${params.id}`;
        const response = await axios.get(url, {
          withCredentials: true,
        });
        setGarden(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGardenLayout();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-3 md:p-10">
      {garden && (
        <>
          <h1 className="text-center pb-5 text-gray-700 text-xl md:text-2xl">
            {garden.name}
          </h1>
          <GardenLayoutTable gardenLayout={garden.gardenLayout} />
          <div className="px-5 text-gray-700">
            <p className="font-bold pb-3">
              Start date: {formatDate(garden.startDate)}
            </p>
            <p className="pb-5">
              <span className="font-bold">Planting:</span> Pre-soaking of seeds
              in warm water overnight before planting them helps to soften the
              seed coat and speed up the seed germination. The seed should be
              planted 1/4 inch deep. Sow the seeds in moist soil, but the soil
              should not be over damp or soil dripping with water. Don't expose
              it to direct sunlight until the seeds get germinated. Maintaining
              a warm temperature leads to faster germination than very cold or
              scorching weather.
            </p>
            <p className="pb-5">
              <span className="font-bold">Or</span> If you want to germinate the
              seeds separately in a tray use the same soil mix sow the seed in
              moist soil. Pre-soaking of seeds in warm water overnight before
              planting them helps to soften the seed coat and speed up the seed
              germination. Sow the seeds in moist soil, but the soil should not
              be over damp or soil dripping with water. Don't expose the
              germination trays or grow bags in direct sunlight until the seeds
              get germinated. Maintaining a warm temperature leads to faster
              germination than very cold or scorching weather. Replant as soon
              as the seedlings break the surface and come out. And follow the
              planting process.
            </p>
            <p className="pb-5">
              <span className="font-bold">Soil mix:</span> A general guideline
              for mixing your soil is 40% garden soil, 40% compost, and 20% a
              combination of perlite or vermiculite, peat moss or coconut coir,
              and additional organic matter. Add organic growth promoters like
              cow dung manure, bone meal & fish meal.
            </p>
            {/* <div className="text-center text-2xl font-bold pt-10 pb-5">
              Garden Layout
            </div> */}

            <p className="py-5">
              <span className="font-bold">Watering:</span> Keep the soil moist
              always by slightly sprinkling the water over that area in the
              morning and evening.
            </p>
            <p className="pb-5">
              <span className="font-bold">Fertilizer:</span> Usage of organic
              growth promoters like cow dung manure, bone meal & fish meal
              monthly usage help in improved flowering and overall health of the
              plant.
            </p>
            <p className="pb-5">
              <span className="font-bold">Pest control:</span> Neem oil stands
              out as an excellent organic solution for your garden.
              Additionally, incorporating marigold plants into your garden not
              only adds vibrant colors but also serves as an effective natural
              pest repellent.
            </p>
            <div className="flex flex-col sm:flex-row  justify-between">
              <p className="font-bold pb-6">
                For replanting dates and other information refer to the email.
              </p>
              <DeleteGardenButton setRefreshData={setRefreshData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
