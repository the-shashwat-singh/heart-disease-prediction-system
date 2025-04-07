import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardHeader,
  Alert,
  AlertTitle,
  Divider,
  Tooltip,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '& .MuiCardHeader-title': {
    fontWeight: 600,
  },
}));

const FormSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const HelpText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.85rem',
  marginTop: theme.spacing(0.5),
}));

// Form validation schema
const validationSchema = Yup.object({
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be less than 120'),
  sex: Yup.number()
    .required('Sex is required')
    .oneOf([0, 1], 'Please select a valid option'),
  cp: Yup.number()
    .required('Chest pain type is required')
    .oneOf([0, 1, 2, 3], 'Please select a valid option'),
  trestbps: Yup.number()
    .required('Resting blood pressure is required')
    .min(80, 'Resting BP must be at least 80')
    .max(240, 'Resting BP must be less than 240'),
  chole: Yup.number()
    .required('Cholesterol is required')
    .min(100, 'Cholesterol must be at least 100')
    .max(600, 'Cholesterol must be less than 600'),
  fbs: Yup.number()
    .required('Fasting blood sugar is required')
    .oneOf([0, 1], 'Please select a valid option'),
  restecg: Yup.number()
    .required('Resting ECG is required')
    .oneOf([0, 1, 2], 'Please select a valid option'),
  thalach: Yup.number()
    .required('Max heart rate is required')
    .min(70, 'Max heart rate must be at least 70')
    .max(220, 'Max heart rate must be less than 220'),
  exang: Yup.number()
    .required('Exercise induced angina is required')
    .oneOf([0, 1], 'Please select a valid option'),
  old_peak: Yup.number()
    .required('Oldpeak is required')
    .min(0, 'Oldpeak must be at least 0')
    .max(10, 'Oldpeak must be less than 10'),
  slope: Yup.number()
    .required('Slope is required')
    .oneOf([0, 1, 2], 'Please select a valid option'),
  ca: Yup.number()
    .required('Cardiac vessels is required')
    .oneOf([0, 1, 2, 3, 4], 'Please select a valid option'),
  thal: Yup.number()
    .required('Thalassemia is required')
    .oneOf([1, 2, 3], 'Please select a valid option'),
});

const PredictionFormPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initial form values
  const initialValues = {
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chole: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    old_peak: '',
    slope: '',
    ca: '',
    thal: '',
  };

  // Mock form submission (in a real app, this would send data to your API)
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form values:', values);
      // In a real application, you would send this data to your backend
      
      setIsSubmitting(false);
      setSubmitting(false);
      
      // Navigate to results page with mock result ID
      // In a real app, you would get this ID from your API
      navigate('/results/123');
    }, 2000);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Heart Disease Prediction
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Fill in your health parameters below to get a prediction of your heart disease risk.
          </Typography>
        </Box>

        <Alert severity="info" sx={{ mb: 4 }}>
          <AlertTitle>Important Information</AlertTitle>
          Please provide accurate information for the most reliable prediction. If you don't know some values, consult with your healthcare provider or use recent test results.
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2">
            <strong>Note:</strong> This prediction is meant for informational purposes only and does not replace professional medical advice. Always consult with a healthcare professional regarding your health concerns.
          </Typography>
        </Alert>

        <StyledCard>
          <StyledCardHeader 
            title="Health Parameters Form" 
            avatar={<FavoriteIcon />}
          />
          <CardContent sx={{ p: 4 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange, isSubmitting }) => (
                <Form>
                  {/* Personal Factors */}
                  <FormSectionTitle variant="h6" component="h2">
                    <LocalHospitalIcon /> Personal Factors
                  </FormSectionTitle>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Your current age in years" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="age"
                          name="age"
                          label="Age"
                          value={values.age}
                          onChange={handleChange}
                          error={touched.age && Boolean(errors.age)}
                          helperText={touched.age && errors.age}
                          InputProps={{
                            endAdornment: <InfoIcon color="action" fontSize="small" />,
                          }}
                          type="number"
                        />
                      </Tooltip>
                      <HelpText>Enter your current age in years (1-120)</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Biological sex: male or female" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="sex"
                          name="sex"
                          label="Sex"
                          select
                          value={values.sex}
                          onChange={handleChange}
                          error={touched.sex && Boolean(errors.sex)}
                          helperText={touched.sex && errors.sex}
                        >
                          <MenuItem value="">Select your sex</MenuItem>
                          <MenuItem value={1}>Male</MenuItem>
                          <MenuItem value={0}>Female</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Select your biological sex (Male = 1, Female = 0)</HelpText>
                    </Grid>
                  </Grid>

                  {/* Cardiovascular Symptoms */}
                  <FormSectionTitle variant="h6" component="h2">
                    <MonitorHeartIcon /> Cardiovascular Symptoms
                  </FormSectionTitle>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Type of chest pain experienced" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="cp"
                          name="cp"
                          label="Chest Pain Type"
                          select
                          value={values.cp}
                          onChange={handleChange}
                          error={touched.cp && Boolean(errors.cp)}
                          helperText={touched.cp && errors.cp}
                        >
                          <MenuItem value="">Select chest pain type</MenuItem>
                          <MenuItem value={0}>Typical Angina (Value: 0)</MenuItem>
                          <MenuItem value={1}>Atypical Angina (Value: 1)</MenuItem>
                          <MenuItem value={2}>Non-Anginal Pain (Value: 2)</MenuItem>
                          <MenuItem value={3}>Asymptomatic (Value: 3)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Select the type of chest pain you experience</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Resting blood pressure in mm Hg" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="trestbps"
                          name="trestbps"
                          label="Resting Blood Pressure (mm Hg)"
                          value={values.trestbps}
                          onChange={handleChange}
                          error={touched.trestbps && Boolean(errors.trestbps)}
                          helperText={touched.trestbps && errors.trestbps}
                          type="number"
                        />
                      </Tooltip>
                      <HelpText>Your resting blood pressure in mm Hg (normal: 90-120)</HelpText>
                    </Grid>
                  </Grid>

                  {/* Blood Tests */}
                  <FormSectionTitle variant="h6" component="h2">
                    <BloodtypeIcon /> Blood Tests
                  </FormSectionTitle>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Tooltip title="Serum cholesterol in mg/dl" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="chole"
                          name="chole"
                          label="Cholesterol (mg/dl)"
                          value={values.chole}
                          onChange={handleChange}
                          error={touched.chole && Boolean(errors.chole)}
                          helperText={touched.chole && errors.chole}
                          type="number"
                        />
                      </Tooltip>
                      <HelpText>Your serum cholesterol in mg/dl (normal: &lt;200)</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Tooltip title="Fasting blood sugar > 120 mg/dl" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="fbs"
                          name="fbs"
                          label="Fasting Blood Sugar"
                          select
                          value={values.fbs}
                          onChange={handleChange}
                          error={touched.fbs && Boolean(errors.fbs)}
                          helperText={touched.fbs && errors.fbs}
                        >
                          <MenuItem value="">Select option</MenuItem>
                          <MenuItem value={1}>Greater than 120 mg/dl (Value: 1)</MenuItem>
                          <MenuItem value={0}>Less than or equal to 120 mg/dl (Value: 0)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Is your fasting blood sugar &gt; 120 mg/dl?</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Tooltip title="Resting electrocardiographic results" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="restecg"
                          name="restecg"
                          label="Resting ECG Results"
                          select
                          value={values.restecg}
                          onChange={handleChange}
                          error={touched.restecg && Boolean(errors.restecg)}
                          helperText={touched.restecg && errors.restecg}
                        >
                          <MenuItem value="">Select ECG result</MenuItem>
                          <MenuItem value={0}>Normal (Value: 0)</MenuItem>
                          <MenuItem value={1}>ST-T Wave Abnormality (Value: 1)</MenuItem>
                          <MenuItem value={2}>Left Ventricular Hypertrophy (Value: 2)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Your resting electrocardiographic results</HelpText>
                    </Grid>
                  </Grid>

                  {/* Exercise Test Results */}
                  <FormSectionTitle variant="h6" component="h2">
                    <FitnessCenterIcon /> Exercise Test Results
                  </FormSectionTitle>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <Tooltip title="Maximum heart rate achieved during exercise" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="thalach"
                          name="thalach"
                          label="Max Heart Rate"
                          value={values.thalach}
                          onChange={handleChange}
                          error={touched.thalach && Boolean(errors.thalach)}
                          helperText={touched.thalach && errors.thalach}
                          type="number"
                        />
                      </Tooltip>
                      <HelpText>Maximum heart rate achieved during exercise</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Tooltip title="Exercise induced angina" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="exang"
                          name="exang"
                          label="Exercise Induced Angina"
                          select
                          value={values.exang}
                          onChange={handleChange}
                          error={touched.exang && Boolean(errors.exang)}
                          helperText={touched.exang && errors.exang}
                        >
                          <MenuItem value="">Select option</MenuItem>
                          <MenuItem value={1}>Yes (Value: 1)</MenuItem>
                          <MenuItem value={0}>No (Value: 0)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Do you experience chest pain during exercise?</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Tooltip title="ST depression induced by exercise relative to rest" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="old_peak"
                          name="old_peak"
                          label="Oldpeak"
                          value={values.old_peak}
                          onChange={handleChange}
                          error={touched.old_peak && Boolean(errors.old_peak)}
                          helperText={touched.old_peak && errors.old_peak}
                          type="number"
                          inputProps={{ step: 0.1 }}
                        />
                      </Tooltip>
                      <HelpText>ST depression induced by exercise relative to rest</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Tooltip title="Slope of the peak exercise ST segment" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="slope"
                          name="slope"
                          label="Slope"
                          select
                          value={values.slope}
                          onChange={handleChange}
                          error={touched.slope && Boolean(errors.slope)}
                          helperText={touched.slope && errors.slope}
                        >
                          <MenuItem value="">Select slope</MenuItem>
                          <MenuItem value={0}>Upsloping (Value: 0)</MenuItem>
                          <MenuItem value={1}>Flat (Value: 1)</MenuItem>
                          <MenuItem value={2}>Downsloping (Value: 2)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Slope of the peak exercise ST segment</HelpText>
                    </Grid>
                  </Grid>

                  {/* Additional Cardiac Tests */}
                  <FormSectionTitle variant="h6" component="h2">
                    <MonitorHeartIcon /> Additional Cardiac Tests
                  </FormSectionTitle>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Number of major vessels colored by fluoroscopy" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="ca"
                          name="ca"
                          label="Cardiac Vessels (CA)"
                          select
                          value={values.ca}
                          onChange={handleChange}
                          error={touched.ca && Boolean(errors.ca)}
                          helperText={touched.ca && errors.ca}
                        >
                          <MenuItem value="">Select number of vessels</MenuItem>
                          <MenuItem value={0}>0 Vessel</MenuItem>
                          <MenuItem value={1}>1 Vessel</MenuItem>
                          <MenuItem value={2}>2 Vessels</MenuItem>
                          <MenuItem value={3}>3 Vessels</MenuItem>
                          <MenuItem value={4}>4 Vessels</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Number of major vessels colored by fluoroscopy (0-4)</HelpText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Tooltip title="Thalassemia (blood disorder)" arrow placement="top-start">
                        <TextField
                          fullWidth
                          id="thal"
                          name="thal"
                          label="Thalassemia"
                          select
                          value={values.thal}
                          onChange={handleChange}
                          error={touched.thal && Boolean(errors.thal)}
                          helperText={touched.thal && errors.thal}
                        >
                          <MenuItem value="">Select thalassemia type</MenuItem>
                          <MenuItem value={1}>Normal (Value: 1)</MenuItem>
                          <MenuItem value={2}>Fixed Defect (Value: 2)</MenuItem>
                          <MenuItem value={3}>Reversible Defect (Value: 3)</MenuItem>
                        </TextField>
                      </Tooltip>
                      <HelpText>Thalassemia blood disorder type</HelpText>
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                      sx={{ 
                        py: 1.5, 
                        px: 5, 
                        borderRadius: 2,
                        fontSize: '1.1rem'
                      }}
                      startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <FavoriteIcon />}
                    >
                      {isSubmitting ? 'Processing...' : 'Get Prediction'}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </CardContent>
        </StyledCard>

        {/* Reference Values Section */}
        <Box sx={{ mt: 5 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                <HelpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Reference Values & Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                    Understanding the Parameters
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {[
                      { term: 'Age', desc: 'Age in years' },
                      { term: 'Sex', desc: '1 = male, 0 = female' },
                      { term: 'Chest Pain Type', desc: '0-3 scale, with 0 being typical angina and 3 being asymptomatic' },
                      { term: 'Resting BP', desc: 'Resting blood pressure in mm Hg' },
                      { term: 'Cholesterol', desc: 'Serum cholesterol in mg/dl' },
                      { term: 'Fasting BS', desc: 'Fasting blood sugar > 120 mg/dl (1 = true, 0 = false)' },
                      { term: 'Resting ECG', desc: 'Resting electrocardiographic results (0-2)' },
                    ].map((item, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <Typography variant="body2">
                          <strong>{item.term}:</strong> {item.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                    More Parameter Information
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {[
                      { term: 'Max Heart Rate', desc: 'Maximum heart rate achieved during exercise' },
                      { term: 'Exercise Induced Angina', desc: 'Exercise induced chest pain (1 = yes, 0 = no)' },
                      { term: 'Oldpeak', desc: 'ST depression induced by exercise relative to rest' },
                      { term: 'Slope', desc: 'Slope of the peak exercise ST segment (0-2)' },
                      { term: 'CA', desc: 'Number of major vessels colored by fluoroscopy (0-4)' },
                      { term: 'Thalassemia', desc: '1 = normal, 2 = fixed defect, 3 = reversible defect' },
                    ].map((item, index) => (
                      <Box component="li" key={index} sx={{ mb: 1 }}>
                        <Typography variant="body2">
                          <strong>{item.term}:</strong> {item.desc}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PredictionFormPage; 