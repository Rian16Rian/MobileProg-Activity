import React, { useState } from 'react';
import Login from './profile/Login';
import UserAvatar from './profile/userprofile';
import { useFonts } from 'expo-font';
import { ThemeProvider } from './Theme';

export default function App() {
  const [loadedFonts] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  if (!loadedFonts) {
    return null; 
  }

  return (
    <ThemeProvider>
      {isLoggedIn ? (  
        <UserAvatar /> 
      ) : (
        <Login onLogin={handleLogin} /> 
      )}
    </ThemeProvider>
  );
}
