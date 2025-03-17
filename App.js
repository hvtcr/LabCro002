import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Header" />
      <Header title="Trang chủ" />
      <Header title="Cài đặt" />

      <Text style={styles.title}>Lịch trình</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Địa điểm</Text>
        <Text style={styles.info}>Hồ Tràm, Vũng Tàu</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Thời gian</Text>
        <Text style={styles.info}>09:00 AM - 12:00 AM, 12/12/2024</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Hình ảnh</Text>
        <Image source={{ uri: 'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/tranh-phong-canh-1.jpg' }} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CHI TIẾT</Text>
      </TouchableOpacity>
      
      <Text style={styles.inputLabel}>Title *</Text>
      <TextInput style={styles.input} placeholder="Place holder" />
      <Text style={styles.inputLabel}>Title *</Text>
      <TextInput style={[styles.input, styles.inputError]} placeholder="Place holder" />
      <Text style={styles.errorText}>Error Description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  info: {
    marginTop: 5,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputLabel: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  headerContainer: {
    backgroundColor: '#eee',
    padding: 20,
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
