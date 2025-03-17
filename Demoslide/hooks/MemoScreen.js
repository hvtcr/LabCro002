import React, { useState, memo } from 'react';
import { Text } from 'react-native';

const MemoComponent = memo(({ count }) => {
  console.log('Re-render MemoComponent');
  return <Text>Count: {count}</Text>;
});

const MemoScreen = () => {
  const [count, setCount] = useState(0);
  return <MemoComponent count={count} />;
};

export default MemoScreen;
