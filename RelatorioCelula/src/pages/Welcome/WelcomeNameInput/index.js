import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InputName from '../../../components/Core/InputName';
import Colors from '../../../styles/Colors';

const WelcomeNameInput = ({nameCelula, onChange}) => {
  return (
    <View>
      <Text style={styles.label}>Informe o nome da sua Célula</Text>
      <InputName value={nameCelula} onChange={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    fontSize: 29,
    textAlign: 'center',
  },
});

export default WelcomeNameInput;
