import axios from 'axios'; 

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL 
export const fetchUserData = async (username) => { 
  const response = await axios.get(`${BASE_URL}/users/${username}`); 
  return response.data;
};

