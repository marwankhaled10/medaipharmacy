import axios from 'axios';

const BASE_URL = 'http://localhost:5005'; // your backend server URL

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const getMedicines = async () => {
  const response = await axios.get(`${BASE_URL}/medicines`);
  return response.data;
};

export const getMedicineById = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/medicines/${id}`);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

