import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  marginBottom: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0),
  },
}));

const HeroCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
  '& svg': {
    fontSize: 40,
  },
}));

const CtaSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
  borderRadius: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
}));

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    {
      title: "Register Easily",
      description: "Create an account in less than a minute and start your heart health journey",
      icon: <PersonAddIcon />,
    },
    {
      title: "Enter Parameters",
      description: "Input your medical data like age, blood pressure, cholesterol levels, and more",
      icon: <FormatListBulletedIcon />,
    },
    {
      title: "AI Analysis",
      description: "Our advanced algorithm processes your data and analyzes potential risk factors",
      icon: <BarChartIcon />,
    },
    {
      title: "Get Results",
      description: "Receive your heart disease prediction results with detailed explanations",
      icon: <DescriptionIcon />,
    },
  ];

  const healthParameters = [
    {
      title: "Age",
      description: "Risk increases as you get older",
      icon: <SpeedIcon />,
    },
    {
      title: "Blood Pressure",
      description: "High blood pressure is a major risk factor",
      icon: <MedicalServicesIcon />,
    },
    {
      title: "Cholesterol",
      description: "High levels can lead to plaque buildup in arteries",
      icon: <HealingIcon />,
    },
    {
      title: "Exercise",
      description: "Regular physical activity reduces risks",
      icon: <FitnessCenterIcon />,
    },
    {
      title: "Diet",
      description: "Healthy eating habits support heart health",
      icon: <RestaurantIcon />,
    },
    {
      title: "Stress",
      description: "Chronic stress can impact heart health",
      icon: <SpaIcon />,
    },
  ];

  return (
    <Box component="main">
      {/* Hero Section */}
      <HeroSection>
        {/* Decorative circles */}
        <HeroCircle sx={{ width: 300, height: 300, top: -100, right: -50 }} />
        <HeroCircle sx={{ width: 200, height: 200, bottom: -50, left: 100 }} />
        <HeroCircle sx={{ width: 150, height: 150, top: '50%', left: '10%' }} />
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 700, 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2 
                  }}
                >
                  Predict Heart Disease Risk with AI
                </Typography>
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 400, 
                    mb: 4, 
                    opacity: 0.9,
                    maxWidth: 600
                  }}
                >
                  Our machine learning system helps predict your likelihood of developing heart disease based on your health parameters.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Button 
                    component={RouterLink} 
                    to="/register"
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<PersonAddIcon />}
                    sx={{ 
                      py: 1.5, 
                      px: 3,
                      borderRadius: 2,
                      boxShadow: '0 4px 14px rgba(244, 67, 54, 0.3)'
                    }}
                  >
                    Get Started
                  </Button>
                  <Button 
                    component={RouterLink} 
                    to="/about"
                    variant="outlined"
                    size="large"
                    sx={{ 
                      py: 1.5, 
                      px: 3,
                      borderRadius: 2,
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ textAlign: 'center' }}
              >
                <Box
                  component="img"
                  src="/heart-illustration.png"
                  alt="Heart Disease Prediction"
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 400,
                    filter: 'drop-shadow(0 10px 16px rgba(0, 0, 0, 0.2))',
                    borderRadius: 2,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* How It Works Section */}
      <Container component="section" maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              color="primary" 
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              SIMPLE PROCESS
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              How It Works
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our system uses advanced machine learning algorithms to predict heart disease risk with high accuracy.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <FeatureCard>
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <FeatureIcon sx={{ mx: 'auto' }}>
                        {feature.icon}
                      </FeatureIcon>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* About The System Section */}
      <Container component="section" maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/heart-health.jpg"
                alt="Heart Health"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h6" 
                component="div" 
                color="primary" 
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                ABOUT OUR SYSTEM
              </Typography>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Heart Disease Prediction System
              </Typography>
              <Typography variant="body1" paragraph>
                Heart disease is one of the leading causes of death globally. Early detection and prevention can significantly reduce risks and save lives.
              </Typography>
              <Typography variant="body1" paragraph>
                Our system leverages machine learning algorithms to analyze various health parameters and predict the likelihood of developing heart disease. The model has been trained on real medical data and provides high accuracy in predictions.
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                  Key Features
                </Typography>
                <Grid container spacing={2}>
                  {[
                    "High prediction accuracy using ML algorithms",
                    "Secure storage of your health records",
                    "Connect with specialized doctors",
                    "Track your heart health over time"
                  ].map((feature, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Health Parameters Section */}
      <Container component="section" maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h6" 
              component="div" 
              color="primary" 
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              HEALTH INDICATORS
            </Typography>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Parameters We Analyze
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our system takes into account these important health indicators to assess your heart disease risk.
            </Typography>
          </motion.div>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {healthParameters.map((param, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ height: '100%', p: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ 
                          color: 'primary.main',
                          mr: 2,
                          '& svg': { fontSize: 32 }
                        }}>
                          {param.icon}
                        </Box>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                          {param.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {param.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <CtaSection>
            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
              <FavoriteIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 3 }} />
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Ready to Check Your Heart Health?
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 400, 
                  mb: 4, 
                  opacity: 0.9,
                  maxWidth: 700,
                  mx: 'auto'
                }}
              >
                Early detection is key to preventing heart disease. Get your prediction today!
              </Typography>
              <Button 
                component={RouterLink} 
                to="/register"
                variant="contained"
                size="large"
                color="secondary"
                sx={{ 
                  py: 1.5, 
                  px: 4,
                  borderRadius: 2,
                  boxShadow: '0 4px 14px rgba(244, 67, 54, 0.3)',
                  fontSize: '1.1rem'
                }}
              >
                Start Now
              </Button>
            </Container>
          </CtaSection>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage; 