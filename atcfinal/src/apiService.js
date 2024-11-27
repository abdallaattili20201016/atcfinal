import axios from 'axios';

const API_BASE_URL = 'http://localhost:15980/api'; // Replace with your backend's URL

export const getItems = () => axios.get(`${API_BASE_URL}/Courses`);
export const createItem = (Course) => axios.post(`${API_BASE_URL}/Courses`, Course);
export const updateItem = (id, Course) => axios.put(`${API_BASE_URL}/Courses/${id}`, Course);
export const deleteItem = (id) => axios.delete(`${API_BASE_URL}/Courses/${id}`);

export const getUsers = () => axios.get(`${API_BASE_URL}/Users`);
export const createUsers = (Course) => axios.post(`${API_BASE_URL}/Users`, Course);
