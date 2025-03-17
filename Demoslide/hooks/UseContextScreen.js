import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button } from 'react-native';

const ThemeContext = createContext('light');

const UseContextScreen = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Button title="Đổi theme" onPress={toggleTheme} />
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);
  return <Text>Theme hiện tại: {theme}</Text>;
};

export default UseContextScreen;
