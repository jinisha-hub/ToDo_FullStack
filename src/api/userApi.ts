import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const signup = async (name:string,email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Signup failed";
  }
};
