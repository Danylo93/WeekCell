import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryAction = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    color: Colors.green,
    textAlign: 'center',
  },

  secondaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  secondaryButtonText: {
    color: Colors.red,
    textAlign: 'center',
  },
});

export default ActionFooter;
