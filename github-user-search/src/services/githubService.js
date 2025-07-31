import axios from 'axios';
const headers = {
  Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
};
const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
