import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip as ChartTooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import PercentIcon from '@mui/icons-material/Percent';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PreviewIcon from '@mui/icons-material/Preview';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MedicationIcon from '@mui/icons-material/Medication';

// Register ChartJS components
ChartJS.register(
  ArcElement, 
  ChartTooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
);

const ResultHeader = styled(Box)(({ theme, ishealthy }) => ({
  background: ishealthy === 'true'
    ? `linear-gradient(135deg, ${theme.palette.success.dark}, ${theme.palette.success.main})`
    : `linear-gradient(135deg, ${theme.palette.error.dark}, ${theme.palette.error.main})`,
  color: theme.palette.common.white,
  borderRadius: '16px 16px 0 0',
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
}));

const ResultIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(3),
  top: theme.spacing(3),
  height: 60,
  width: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  '& svg': {
    fontSize: 40,
  },
}));

const ParameterCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const AccuracyBar = styled(Box)(({ theme, value }) => ({
  position: 'relative',
  height: 10,
  backgroundColor: theme.palette.grey[200],
  borderRadius: 5,
  margin: theme.spacing(1, 0),
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: `${value}%`,
    backgroundColor: value > 80 
      ? theme.palette.success.main 
      : value > 60 
        ? theme.palette.warning.main 
        : theme.palette.error.main,
    borderRadius: 5,
  },
}));

const ResultsPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  
  // Mock data - in a real app, you would fetch this from your API
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setResult({
        id: '123',
        prediction: 0, // 0 = healthy, 1 = at risk
        accuracy: 88.5,
        date: new Date().toISOString(),
        parameters: {
          age: 45,
          sex: 1, // male
          cp: 0, // typical angina
          trestbps: 120, // resting blood pressure
          chole: 180, // cholesterol
          fbs: 0, // fasting blood sugar < 120
          restecg: 0, // normal
          thalach: 160, // max heart rate
          exang: 0, // no exercise induced angina
          old_peak: 1.2, // ST depression
          slope: 1, // flat ST segment
          ca: 0, // no major vessels
          thal: 2, // normal
        },
        riskFactors: [
          { name: 'Age', value: 'Medium Risk', description: 'Age above 40 slightly increases risk' },
          { name: 'Blood Pressure', value: 'Low Risk', description: 'Normal blood pressure' },
          { name: 'Cholesterol', value: 'Low Risk', description: 'Within normal range' },
        ],
        recommendations: [
          'Maintain regular exercise routine',
          'Continue heart-healthy diet',
          'Schedule regular checkups with your doctor',
          'Monitor your blood pressure and cholesterol levels',
        ],
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <FavoriteIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2, animation: 'pulse 1.5s infinite' }} />
        <Typography variant="h4" gutterBottom>
          Processing Your Results
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          We're analyzing your health data to generate your heart disease risk prediction.
        </Typography>
        <LinearProgress sx={{ maxWidth: 400, mx: 'auto' }} />
      </Container>
    );
  }

  // Configure chart data
  const doughnutData = {
    labels: ['Healthy', 'At Risk'],
    datasets: [
      {
        data: result.prediction === 0 ? [result.accuracy, 100 - result.accuracy] : [100 - result.accuracy, result.accuracy],
        backgroundColor: [
          '#4caf50', // green
          '#f44336', // red
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  // Risk factors chart
  const barData = {
    labels: ['Age', 'Blood Pressure', 'Cholesterol', 'Heart Rate', 'ECG Results'],
    datasets: [
      {
        label: 'Risk Level',
        data: [45, 20, 30, 15, 25], // Mock risk percentages
        backgroundColor: [
          'rgba(255, 159, 64, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)', 
          'rgba(153, 102, 255, 0.7)',
          'rgba(201, 203, 207, 0.7)',
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        max: 100,
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  // Parameter formatter
  const formatParameter = (key, value) => {
    switch (key) {
      case 'sex':
        return value === 1 ? 'Male' : 'Female';
      case 'cp':
        return ['Typical Angina', 'Atypical Angina', 'Non-Anginal Pain', 'Asymptomatic'][value];
      case 'fbs':
        return value === 1 ? '> 120 mg/dl' : '≤ 120 mg/dl';
      case 'restecg':
        return ['Normal', 'ST-T Wave Abnormality', 'Left Ventricular Hypertrophy'][value];
      case 'exang':
        return value === 1 ? 'Yes' : 'No';
      case 'slope':
        return ['Upsloping', 'Flat', 'Downsloping'][value];
      case 'thal':
        return ['', 'Normal', 'Fixed Defect', 'Reversible Defect'][value];
      default:
        return value;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Your Heart Health Results
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Results generated on {new Date(result.date).toLocaleDateString()} at {new Date(result.date).toLocaleTimeString()}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Main Result Card */}
          <Grid item xs={12}>
            <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <ResultHeader ishealthy={result.prediction === 0 ? 'true' : 'false'}>
                <ResultIcon>
                  {result.prediction === 0 ? <CheckCircleIcon /> : <WarningIcon />}
                </ResultIcon>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  Heart Disease Prediction Result
                </Typography>
                <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 2 }}>
                  {result.prediction === 0 ? 'Low Risk' : 'At Risk'}
                </Typography>
                <Chip 
                  icon={<PercentIcon />} 
                  label={`${result.accuracy.toFixed(1)}% Confidence`} 
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                    color: 'white',
                    fontWeight: 600
                  }} 
                />
              </ResultHeader>
              <CardContent sx={{ p: 4 }}>
                <Grid container spacing={4}>
                  {/* Prediction Chart */}
                  <Grid item xs={12} md={5}>
                    <Box sx={{ height: 300, position: 'relative' }}>
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: '50%', 
                          left: '50%', 
                          transform: 'translate(-50%, -50%)',
                          textAlign: 'center'
                        }}
                      >
                        <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                          {result.accuracy.toFixed(1)}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {result.prediction === 0 ? 'Healthy' : 'At Risk'}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Explanation */}
                  <Grid item xs={12} md={7}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      What This Means
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {result.prediction === 0 
                        ? 'Based on your health parameters, our model predicts that you have a low risk of heart disease. The prediction has a high confidence level, but regular medical check-ups are still recommended.'
                        : 'Based on your health parameters, our model predicts that you may be at risk of heart disease. We recommend consulting with a healthcare professional for a thorough evaluation and advice.'
                      }
                    </Typography>
                    <Typography variant="body1" paragraph>
                      The prediction is based on machine learning algorithms trained on medical data. The accuracy score indicates the confidence level of this prediction.
                    </Typography>
                    
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Primary Risk Factors
                      </Typography>
                      <List>
                        {result.riskFactors.map((factor, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon>
                              <InfoIcon color={
                                factor.value.includes('Low') ? 'success' :
                                factor.value.includes('Medium') ? 'warning' : 'error'
                              } />
                            </ListItemIcon>
                            <ListItemText 
                              primary={factor.name} 
                              secondary={factor.description}
                              primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            <Chip 
                              label={factor.value} 
                              size="small"
                              color={
                                factor.value.includes('Low') ? 'success' :
                                factor.value.includes('Medium') ? 'warning' : 'error'
                              }
                              variant="outlined"
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Paper>
          </Grid>

          {/* Recommendations */}
          <Grid item xs={12} md={6}>
            <ParameterCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocalHospitalIcon color="primary" sx={{ fontSize: 30, mr: 1.5 }} />
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                    Recommendations
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <List>
                  {result.recommendations.map((rec, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={rec} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<PreviewIcon />}
                    component={RouterLink}
                    to="/doctors"
                    sx={{ mt: 2 }}
                  >
                    Find Doctors Near You
                  </Button>
                </Box>
              </CardContent>
            </ParameterCard>
          </Grid>

          {/* Risk Breakdown */}
          <Grid item xs={12} md={6}>
            <ParameterCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AssessmentIcon color="primary" sx={{ fontSize: 30, mr: 1.5 }} />
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                    Risk Factor Breakdown
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ height: 300 }}>
                  <Bar data={barData} options={barOptions} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                  Bar length indicates relative contribution to overall risk assessment
                </Typography>
              </CardContent>
            </ParameterCard>
          </Grid>

          {/* Your Parameters */}
          <Grid item xs={12}>
            <ParameterCard>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MonitorHeartIcon color="primary" sx={{ fontSize: 30, mr: 1.5 }} />
                  <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                    Your Health Parameters
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={2}>
                  {Object.entries(result.parameters).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          backgroundColor: 'background.default',
                          borderRadius: 2
                        }}
                      >
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          {key === 'trestbps' ? 'Blood Pressure' : 
                           key === 'chole' ? 'Cholesterol' :
                           key === 'thalach' ? 'Max Heart Rate' :
                           key === 'old_peak' ? 'ST Depression' :
                           key === 'ca' ? 'Vessels (CA)' :
                           key === 'thal' ? 'Thalassemia' :
                           key === 'cp' ? 'Chest Pain' :
                           key === 'restecg' ? 'Resting ECG' :
                           key === 'fbs' ? 'Blood Sugar' :
                           key === 'exang' ? 'Exercise Angina' :
                           key.charAt(0).toUpperCase() + key.slice(1)
                          }
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, wordBreak: 'break-word' }}>
                          {formatParameter(key, value)}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </ParameterCard>
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<MedicationIcon />}
              component={RouterLink}
              to="/predict"
              sx={{ mr: 2 }}
            >
              New Prediction
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AccessTimeIcon />}
              component={RouterLink}
              to="/dashboard"
            >
              Back to Dashboard
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ResultsPage; 