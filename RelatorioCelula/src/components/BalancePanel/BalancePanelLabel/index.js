import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

const BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sua Célula tem:</Text>
      <Text style={styles.value}>{currentBalance}</Text>
      <Text style={styles.label}>pessoas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});

export default BalancePanelLabel;
