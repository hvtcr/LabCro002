import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ label, placeholder, error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} *</Text>
      <TextInput
        style={[styles.input, error ? styles.errorBorder : styles.normalBorder]}
        placeholder={placeholder}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    borderRadius: 5,
  },
  normalBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  errorBorder: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default CustomTextInput;