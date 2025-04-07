import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const MainWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
}));

const MainLayout = () => {
  // Mock auth state for demo purposes
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Mock login function
  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Mock logout function
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <MainWrapper>
      <Header 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={handleLogout} 
      />
      <ContentWrapper>
        <Outlet context={{ isAuthenticated, user, onLogin: handleLogin }} />
      </ContentWrapper>
      <Footer />
    </MainWrapper>
  );
};

export default MainLayout; 