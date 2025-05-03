import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTrafficData = async (url: string) => {
  try {
    const response = await apiClient.get(`/traffic?url=${encodeURIComponent(url)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic data:', error);
    throw error;
  }
};
