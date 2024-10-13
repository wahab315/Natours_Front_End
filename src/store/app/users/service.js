import axios from "axios";

const userService = {
  signUp: async (userData) => {
    return await axios.post(
      `${import.meta.env.VITE_APP_BACKEND_BASE_URL}users/sign-up`,
      userData
    );
  },
};

export default userService;
