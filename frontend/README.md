# Heart Disease Prediction System - React Frontend

This is the modern React frontend for the Heart Disease Prediction System. It provides a user-friendly interface for predicting heart disease risk based on health parameters.

## Features

- **Modern UI**: Built with Material UI for a clean, responsive design
- **Animations**: Smooth transitions and animations using Framer Motion
- **Form Validation**: Client-side validation using Formik and Yup
- **Data Visualization**: Interactive charts using Chart.js
- **Responsive Design**: Works on all device sizes
- **React Router**: For seamless navigation between pages

## Tech Stack

- React 18
- React Router 6
- Material UI 5
- Formik & Yup
- Chart.js & React-Chartjs-2
- Framer Motion
- Axios for API requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```
   npm start
   # or
   yarn start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To build the app for production:

```
npm run build
# or
yarn build
```

This will create a `build` folder with optimized production build.

## Project Structure

```
frontend/
├── public/              # Public assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── layouts/     # Layout components
│   │   └── ui/          # UI components
│   ├── pages/           # Page components
│   ├── assets/          # Static assets
│   ├── config.js        # Application configuration
│   ├── App.js           # Main App component
│   └── index.js         # Application entry point
└── package.json         # Dependencies and scripts
```

## Integration with Backend

The frontend communicates with the Django backend using RESTful API endpoints. The configuration for API URLs is stored in `src/config.js`.

## Pages

- **Home**: Landing page with system overview
- **Login/Register**: Authentication pages
- **Dashboard**: User dashboard showing previous predictions
- **Prediction Form**: Form to input health parameters
- **Results**: Displays prediction results with visualizations
- **About**: Information about the system
- **Contact**: Contact information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Material UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Chart.js](https://www.chartjs.org/)
- [React Router](https://reactrouter.com/)