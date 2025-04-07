import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(3),
  marginTop: theme.spacing(8),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 40,
    height: 2,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CopyrightSection = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(3),
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { title: 'About', links: [
      { name: 'Our Story', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Testimonials', path: '/testimonials' },
    ]},
    { title: 'Services', links: [
      { name: 'Heart Disease Prediction', path: '/predict' },
      { name: 'Health Consultation', path: '/consultation' },
      { name: 'Medical Advice', path: '/advice' },
    ]},
    { title: 'Support', links: [
      { name: 'FAQs', path: '/faqs' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
    ]},
  ];

  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FavoriteIcon sx={{ mr: 1, color: 'secondary.main' }} />
              <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'white', textDecoration: 'none' }}>
                Heart Disease Predictor
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
              Our heart disease prediction system uses cutting-edge machine learning to help you understand your cardiovascular health risks with high accuracy.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton aria-label="facebook">
                <FacebookIcon />
              </SocialButton>
              <SocialButton aria-label="twitter">
                <TwitterIcon />
              </SocialButton>
              <SocialButton aria-label="linkedin">
                <LinkedInIcon />
              </SocialButton>
              <SocialButton aria-label="instagram">
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Grid>
          
          {/* Footer links */}
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <SectionTitle variant="subtitle1">{section.title}</SectionTitle>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    <FooterLink component={RouterLink} to={link.path}>
                      {link.name}
                    </FooterLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          
          {/* Contact info */}
          <Grid item xs={12} sm={6} md={4}>
            <SectionTitle variant="subtitle1">Contact Us</SectionTitle>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
              123 Health Avenue, Medical District
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
              Email: contact@heartdisease.org
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        
        {/* Copyright section */}
        <CopyrightSection>
          <Typography variant="body2">
            &copy; {currentYear} Heart Disease Prediction System. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Made with <FavoriteIcon sx={{ fontSize: 16, color: 'secondary.main', verticalAlign: 'middle', mx: 0.5 }} /> and care for your heart health
          </Typography>
        </CopyrightSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 