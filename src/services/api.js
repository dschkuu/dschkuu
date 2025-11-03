import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = `${BASE_URL}/api`;

// Blogları çek
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/`);
    // Görsellerin tam URL’sini oluştur
    return response.data.map((blog) => ({
      ...blog,
      image: blog.image || null,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// Etkinlikleri çek
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/`);
    return response.data.map((event) => ({
      ...event,
      image: data.image || null, 
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

// Tek bir blog detayını çek
export const fetchBlogDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/${id}/`);
    const data = response.data;
    return {
      ...data,
      image: data.image || null,
    };
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null;
  }
};

// Tek bir etkinlik detayını çek
export const fetchEventDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events/${id}/`);
    const data = response.data;
    return {
      ...data,
      image: data.image || null, 
    };
  } catch (error) {
    console.error("Error fetching event detail:", error);
    return null;
  }
};

// Ayarları çek (join link için)
export const fetchSettings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/home/settings/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return { join_link: "#" };
  }
};

// 🔹 Sponsorları çek
export const fetchSponsors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sponsors/`);
    return response.data.map((sponsor) => ({
      ...sponsor,
      image: sponsor.logo ? `${BASE_URL}${sponsor.logo}` : null,
    }));
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return [];
  }
};

// Ekip üyelerini çek
export const fetchTeamMembers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/team/`);
    return response.data.map((member) => ({
      ...member,
      photo: member.photo ? `${BASE_URL}${member.photo}` : null,
    }));
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};

// Arşiv girişlerini çek
export const fetchArsivEntries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/home/`);
    return response.data.map((entry) => ({
      ...entry,
      photo: entry.photo ? entry.photo : null, // backend full URL veriyor
    }));
  } catch (error) {
    console.error("Error fetching arsiv entries:", error);
    return [];
  }
};
export { BASE_URL };
