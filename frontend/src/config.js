/**
 * Configuration settings for the Heart Disease Prediction System
 */

const config = {
  // API URL - in development, use Django default port
  API_URL: 'http://localhost:8000/api',
  
  // Authentication endpoints
  AUTH_ENDPOINTS: {
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    LOGOUT: '/auth/logout/',
    CHANGE_PASSWORD: '/auth/change-password/',
  },
  
  // Prediction endpoints
  PREDICTION_ENDPOINTS: {
    SUBMIT: '/predictions/submit/',
    GET_RESULT: '/predictions/result/',
    HISTORY: '/predictions/history/',
  },
  
  // User endpoints
  USER_ENDPOINTS: {
    PROFILE: '/users/profile/',
    DOCTORS: '/users/doctors/',
  },
  
  // App settings
  APP_SETTINGS: {
    APP_NAME: 'Heart Disease Prediction System',
    SUPPORT_EMAIL: 'support@heartdisease.org',
    VERSION: '1.0.0',
  },
  
  // Chart colors
  CHART_COLORS: {
    PRIMARY: '#1976d2',
    SECONDARY: '#f44336',
    SUCCESS: '#4caf50',
    WARNING: '#ffa000',
    INFO: '#0288d1',
    GRAY: '#757575',
  },
};

export default config; 