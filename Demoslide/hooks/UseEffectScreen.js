import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';

const UseEffectScreen = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log('Component mounted'), []);
  useEffect(() => console.log('Count changed:', count), [count]);
  return <Button title="Increase" onPress={() => setCount(count + 1)} />;
};

export default UseEffectScreen;
