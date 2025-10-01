// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend base URL
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // allow sending cookies (if your backend needs it)
});

export default API;
