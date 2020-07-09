import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import Colors from '../../../styles/Colors';

const NewEntryIdade = ({value, onChangeValue}) => {
  return (
    <View>
      <TextInputMask
        placeholder="Informe a idade"
        style={styles.masked}
        type={'only-numbers'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  masked: {
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.asphalt,
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
});

export default NewEntryIdade;
