import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

// import { Container } from './styles';

const WelcomeMessage = () => {
  return (
    <View>
      <Text style={styles.title}>Olá</Text>
      <Text style={styles.message}>
        Para começar a usar o app é preciso informar o nome da sua Célula
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});

export default WelcomeMessage;
