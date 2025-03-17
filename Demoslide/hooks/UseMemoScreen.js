import React, { useState, useMemo } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const UseMemoScreen = () => {
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const handleAdd = () => setProducts([...products, { price: +price }]);
  const total = useMemo(() => products.reduce((sum, p) => sum + p.price, 0), [products]);
  return (
    <View>
      <TextInput value={price} onChangeText={setPrice} placeholder="Nhập giá" />
      <Button title="Thêm" onPress={handleAdd} />
      <Text>Tổng giá: {total}</Text>
    </View>
  );
};

export default UseMemoScreen;
