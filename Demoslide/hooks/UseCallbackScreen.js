import React, { useState, useCallback } from 'react';
import { Button } from 'react-native';

const UseCallbackScreen = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => setCount(prev => prev + 1), []);
  return <Button title="Tăng" onPress={handleIncrease} />;
};

export default UseCallbackScreen;
