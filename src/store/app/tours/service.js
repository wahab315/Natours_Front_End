import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "",
//   withCredentials: true,
//   // adapter: ["xhr", "http", function myCustomAdapter(config) {}],
// });

// Service methods
// const tourService = {
//   getAllTours: async () => {
//     return await axiosInstance.get("/tours");
//   },

const TOUR_API_URL = "http://localhost:8000/api/v1/tours";

  const tourService = {
    fetchAllTours: async () => {
      return await axios.get(TOUR_API_URL);
    }
  };
  //   fetchAllCases: async (startDate, endDate) => {
  //     return await axiosInstance.get(`/cases?${startDate}${endDate}`);
  //   },
  //   resetCasesCache: async () => {
  //     return await axiosInstance.get("/cases/reset-cache");
  //   },
  //   createCase: async (payload) => {
  //     return await axiosInstance.post("/cases", payload);
  //   },
  //   removeDynamicsAccess: async () => {
  //     return await axiosInstance.delete("/cases/remove-access");
  //   },
  //   requestDynamicsAccess: async () => {
  //     return await axiosInstance.post("/cases/request-access");
  //   },
// };

export default tourService;
