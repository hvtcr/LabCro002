import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const SectionViewComponent = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>{item.label}</Text>
          <Text>{item.value}</Text>
          {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
        </View>
      ))}
      <Button title="CHI TIẾT" color="#007BFF" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 5,
    borderRadius: 10,
  },
});

export default SectionViewComponent;