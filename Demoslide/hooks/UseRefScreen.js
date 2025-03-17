import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';

const UseRefScreen = () => {
  const prevCount = useRef(0);
  const [count, setCount] = useState(0);
  useEffect(() => { prevCount.current = count; }, [count]);
  return <Text>Current: {count} - Previous: {prevCount.current}</Text>;
};

export default UseRefScreen;
