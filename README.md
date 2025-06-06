# Heart Disease Prediction System

A modern web application for predicting heart disease risk using machine learning algorithms. The system features a Django backend with a Python-based machine learning model and a modern React frontend with Material UI.

## Features

- **Heart Disease Prediction**: Uses machine learning to predict heart disease risk based on health parameters
- **User Authentication**: Separate dashboards for patients, doctors, and administrators
- **Modern UI**: React-based frontend with Material UI components, animations, and responsive design
- **RESTful API**: Django REST Framework for seamless communication between frontend and backend
- **Data Visualization**: Interactive charts and visualizations using Chart.js
- **Secure**: Authentication and authorization-based access control

## Architecture

The system is built using a modern, decoupled architecture:

- **Backend**: Django with REST Framework for API endpoints
- **Frontend**: React with Material UI for a modern, responsive interface
- **Database**: SQLite (for development) / PostgreSQL (for production)
- **Machine Learning**: Gradient Boosting Classifier for heart disease prediction

## Technology Stack

### Backend
- Python 3.x
- Django 4.x
- Django REST Framework
- Scikit-learn for machine learning

### Frontend
- React 18
- Material UI 5
- Chart.js for data visualization
- Formik & Yup for form validation
- Framer Motion for animations
- Axios for API communication

## Getting Started

### Prerequisites
- Python 3.x
- Node.js 14.x or higher
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Heart-Disease-Prediction-System
   ```

2. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Apply migrations:
   ```
   python manage.py migrate
   ```

5. Create a superuser:
   ```
   python manage.py createsuperuser
   ```

6. Run the server:
   ```
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure
```
├── health/                 # Django app for health prediction
├── health_disease/         # Django project settings
├── api/                    # API endpoints
├── Machine_Learning/       # ML model and scripts
├── frontend/               # React frontend
│   ├── public/             # Public assets
│   └── src/                # React source code
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── services/       # API services
│       └── assets/         # Static assets
├── media/                  # User-uploaded files
└── requirements.txt        # Python dependencies
```

## Screenshots

### Home Page
![Home Page](SCREEN-SHOTS/home.png)

### Prediction Form
![Prediction Form](SCREEN-SHOTS/prediction_form.png)

### Results Page
![Results Page](SCREEN-SHOTS/results.png)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Scikit-learn](https://scikit-learn.org/) for machine learning functionality
- [Django](https://www.djangoproject.com/) for the backend framework
- [React](https://reactjs.org/) for the frontend framework
- [Material UI](https://mui.com/) for UI components
- [Chart.js](https://www.chartjs.org/) for data visualization

## Abstract 
<p> 
  Now days, Heart disease is the most common disease. But, unfortunately the treatment of heart
disease is somewhat costly that is not affordable by common man. Hence, we can reduce this
problem in some amount just by predicting heart disease before it becomes dangerous
using Heart Disease Prediction System Using Machine Learning and Data mining. If we can
find out heart disease problem in early stages then it becomes very helpful for
treatment. Machine Learning and Data Mining techniques are used for the construction
of Heart Disease Prediction System. In healthcare biomedical field, there is large use of heath
care data in the form of text, images, etc but, that data is hardly visited and is not mined. So,
we can avoid this problem by introducing Heart Disease Prediction System. This system will
help us reduce the costs and to enhance the quality treatment of heart patients. This system can
able to identify complex problems and can able to take intelligent medical decisions. The
system can predict likelihood of patients of getting heart problems by their profiles such as
blood pressure, age, sex, cholesterol and blood sugar. Also, the performance will be compared
by calculation of confusion matrix. This can help to calculate accuracy, precision, and recall.
The overall system provides high performance and better accuracy. 
</p>

## Introduction
<p>
  The health care industries collect huge amounts of data that contain some hidden information,
which is useful for making effective decisions. For providing appropriate results and making
effective decisions on data, some advanced data mining techniques are used. In this study, a
Heart Disease Prediction System (HDPS) is developed using Naives Bayes and Decision Tree
algorithms for predicting the risk level of heart disease. The system uses 13 medical parameters
such as age, sex, blood pressure, cholesterol, and obesity for prediction. The HDPS predicts
the likelihood of patients getting heart disease. It enables significant knowledge. E.g.
Relationships between medical factors related to heart disease and patterns, to be established.
We have employed the multilayer perceptron neural network with back propagation as the
training algorithm. The obtained results have illustrated that the designed diagnostic system
can effectively predict the risk level of heart diseases.
</p>

### Aim
<p> 
  To predict heart disease according to input parameter values provided by user and dataset
stored in database.
</p>

### Objective
<p>
  The main objective of this project is to develop a heart disease prediction system. The system
can discover and extract hidden knowledge associated with diseases from a historical heart data
set Heart disease prediction system aims to exploit data mining techniques on medical data set
to assist in the prediction of the heart diseases.
</p>

### Project Scope
<p>
  The project has a wide scope, as it is not intended to a particular organization. This project is
going to develop generic software, which can be applied by any businesses organization.
Moreover it provides facility to its users. Also the software is going to provide a huge amount
of summary data.
</p>

## System Analysis
### Modules:
- **Patient Login:-** *Patient Login to the system using his ID and Password.*
- **Patient Registration:_** *If Patient is a new user he will enter his personal details and he
will user Id and password through which he can login to the system.*
- **My Details:-** *Patient can view his personal details.*
- **Disease Prediction:-** *- Patient will specify the input parameter values. System will take
input values and predict the disease based on the input data values specified by the
patient and system will also suggest doctors based on the locality*
- **Search Doctor:-** *Patient can search for doctor by specifying name, address or type.*
- **Feedback:-** *Patient will give feedback this will be reported to the admin*
- **Doctor Login:-** *Doctor will access the system using his User ID and Password.*
- **Patient Details:-** *Doctor can view patient's personal details.*
- **Notification:-** *Admin and doctor will get notification how many people had accessed
the system and what all are the diseases predicted by the system.*
- **Admin Login:-** *Admin can login to the system using his ID and Password.*
- **Add Doctor:-** *Admin can add new doctor details into the database.*
- **Add Dataset:-** *Admin can add dataset file in database.*
- **View Doctor:-** *Admin can view various Doctors along with their personal details.*
- **View Disease:-** *Admin can view various diseases details stored in database.*
- **View Patient:-** *Admin can view various patient details that had accessed the system.*
- **View Feedback:-** *Admin can view feedback provided by various users.*
  
### Technology Used:
- #### Languages:
  - ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
  - ![PYTHON](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=darkgreen)
- #### FrameWork:
  - ![BOOTSTRAP](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
  - ![DJANGO](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
- #### Machine-Learning Algorithms:
  - <a href="https://en.wikipedia.org/wiki/Gradient_boosting">**GRADIENT BOOSTING ALGORITHM**</a>
  - <a href="https://en.wikipedia.org/wiki/Logistic_regression">**LOGISTIC REGRESSION**</a>
- #### ML/DL:
  - ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
  - ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
  - ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
- Database:
  - ![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
- #### Data-Set for training:
  - <a href="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/Machine_Learning/heart.csv">Click here for DATA-SET</a>
- #### IDE:
  - ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
  - ![pyCharm](https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white)
- #### OS used for testing:
  - ![MacOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
  - ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
  - ![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System
```

Go to the project directory

```bash
  cd Heart-Disease-Prediction-System
```

Start the server

```bash
  python manage.py runserver
```

## Model Training(Machine Learning)

```javascript
def prdict_heart_disease(list_data):
    csv_file = Admin_Helath_CSV.objects.get(id=1)
    df = pd.read_csv(csv_file.csv_file)

    X = df[['age','sex','cp','trestbps','chol','fbs','restecg','thalach','exang','oldpeak','slope','ca','thal']]
    y = df['target']
    X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8, random_state=0)
    nn_model = GradientBoostingClassifier(n_estimators=100,learning_rate=1.0,max_depth=1, random_state=0)
    nn_model.fit(X_train, y_train)
    pred = nn_model.predict([list_data])
    print("Neural Network Accuracy: {:.2f}%".format(nn_model.score(X_test, y_test) * 100))
    print("Prdicted Value is : ", format(pred))
    dataframe = str(df.head())
    return (nn_model.score(X_test, y_test) * 100),(pred)
```

### For a detailed Report <a href="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/REPORT/PYTHON%20CAPSTONE%20PROJECT%20REPORT%20(TEAM%202).pdf">Click Here</a>


## Demo Video
For demo video 
<a href="https://amritacampuschennai-my.sharepoint.com/:v:/g/personal/ch_en_u4cse20005_ch_students_amrita_edu/ESuaLdQqmNdFjzSBcMiTpaABWPQ2kZWEwCJ53HsY3UdHHg">Click Here</a>

## Output Screen-shots
When the application is runned then, a Welcome Page pops-up
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/WelcomePage.png" />

Admin Dash-board:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/AdminDashboard.png" />

Entering Heart Details to check our Health:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/AddHeartDetail.png" />

Since these details are stored in the Data-base, so we can also retrieve past results:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/SearchLogs1.png" />

To view our own details:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/ViewMyDetaile.png" />

If a user doesn't understand how to use the application then he can:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/IntroductionViewVideo.png" />

To view registered Doctor information:
<img src="https://github.com/Kumar-laxmi/Heart-Disease-Prediction-System/blob/main/SCREEN-SHOTS/DoctorRecords.png" />

## NOTE: GitHub Pages is not working

## Docker Deployment

This project is containerized for easy deployment. You can use Docker and Docker Compose to run both the Django backend and the PostgreSQL database.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Quick Start with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/heart-disease-prediction-system.git
   cd heart-disease-prediction-system
   ```

2. Create a `.env` file (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your preferred settings
   ```

3. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

4. Access the application:
   - Web application: http://localhost
   - API: http://localhost:8000/api/

### Docker Compose Services

- **web**: Django application with the heart disease prediction system
- **db**: PostgreSQL database for storing application data

### Common Docker Commands

- Build and start services:
  ```bash
  docker-compose up -d
  ```

- View logs:
  ```bash
  docker-compose logs -f
  ```

- Stop services:
  ```bash
  docker-compose down
  ```

- Rebuild after changes:
  ```bash
  docker-compose build
  docker-compose up -d
  ```

