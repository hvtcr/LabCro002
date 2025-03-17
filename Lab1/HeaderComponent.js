import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('./heder.png')} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <Image source={require('./heder.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HeaderComponent;