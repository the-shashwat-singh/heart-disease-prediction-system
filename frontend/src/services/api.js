import axios from 'axios';
import config from '../config';

// Create axios instance with base URL
const api = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors
    if (error.response && error.response.status === 401) {
      // Clear local storage and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Authentication services
export const authService = {
  login: async (credentials) => {
    const response = await api.post(config.AUTH_ENDPOINTS.LOGIN, credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },
  
  register: async (userData) => {
    return api.post(config.AUTH_ENDPOINTS.REGISTER, userData);
  },
  
  logout: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return api.post(config.AUTH_ENDPOINTS.LOGOUT);
  },
  
  changePassword: async (passwordData) => {
    return api.post(config.AUTH_ENDPOINTS.CHANGE_PASSWORD, passwordData);
  },
  
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

// Prediction services
export const predictionService = {
  submitPrediction: async (predictionData) => {
    return api.post(config.PREDICTION_ENDPOINTS.SUBMIT, predictionData);
  },
  
  getResult: async (resultId) => {
    return api.get(`${config.PREDICTION_ENDPOINTS.GET_RESULT}${resultId}/`);
  },
  
  getHistory: async () => {
    return api.get(config.PREDICTION_ENDPOINTS.HISTORY);
  },
};

// User services
export const userService = {
  getProfile: async () => {
    return api.get(config.USER_ENDPOINTS.PROFILE);
  },
  
  updateProfile: async (profileData) => {
    return api.put(config.USER_ENDPOINTS.PROFILE, profileData);
  },
  
  getDoctors: async () => {
    return api.get(config.USER_ENDPOINTS.DOCTORS);
  },
};

export default api; 