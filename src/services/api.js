import axios from "axios";

// Backend URL’i
const API_BASE_URL = "http://127.0.0.1:8000/api";

// Blogları çek
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Ayarları çek (join link için)
export const fetchSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/home/settings/`); // burayı düzelttik
    return response.data;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return { join_link: "#" };
  }
};
