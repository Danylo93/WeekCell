import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import useBalance from '../../hooks/useBalance';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sua Célula tem:</Text>
      <LinearGradient
        style={styles.value}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.quantidade}>{balance}</Text>
      </LinearGradient>
      <Text style={styles.label}>membros</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 25,
  },
  label: {
    fontSize: 15,
    color: Colors.white,
  },
  value: {
    fontSize: 18,
    color: Colors.white,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
  },
  quantidade: {
    fontSize: 26,
    color: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});

export default BalanceLabel;
