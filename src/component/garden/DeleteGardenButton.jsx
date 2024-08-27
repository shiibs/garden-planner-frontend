import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteGardenButton({ setRefreshData }) {
  const params = useParams();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleDelete = async () => {
    try {
      const url = `/api/delete_garden/${params.id}`;
      const response = await axios.delete(url, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setRefreshData(true);
        navigate("/", {
          state: { type: "success", message: "Garden deleted successfully!" },
        });
      }
    } catch {
      console.log("error", error);
    }
  };
  return (
    <div>
      <button
        className="block mx-auto px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={handleDelete}
      >
        Delete Garden
      </button>
    </div>
  );
}
