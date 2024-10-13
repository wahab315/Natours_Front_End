import axios from "axios";

const tourService = {
  fetchAllTours: async () => {
    return await axios.get(`${import.meta.env.VITE_APP_BACKEND_BASE_URL}tours`);
  },

  fetchSingleTour: async (id) => {
    return await axios.get(
      `${import.meta.env.VITE_APP_BACKEND_BASE_URL}tours/${id}`
    );
  },
};

export default tourService;
