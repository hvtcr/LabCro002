import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseStateScreen = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{count}</Text>
      <Button title="Tăng" onPress={handleIncrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  textCount: { fontSize: 24 },
});

export default UseStateScreen;
