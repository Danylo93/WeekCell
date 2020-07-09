import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelFreq from './BalancePanelFreq';

import useBalance from '../../hooks/useBalance';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress, onHomeApp}) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelFreq />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Text style={styles.textbtn}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.textbtn2} onPress={onHomeApp}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -20,
  },
  button: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    marginTop: -25,
    marginRight: 10,
  },
  button2: {
    backgroundColor: Colors.redDark,
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    elevation: 5,
    borderRadius: 150,
    marginTop: -50,
    marginLeft: 10,
  },
  panel: {
    paddingVertical: 10,
  },
  textbtn: {
    fontSize: 40,
    color: Colors.white,
  },
  textbtn2: {
    color: Colors.white,
  },
});

export default BalancePanel;
