import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

const InputName = ({nameCelula}) => {
  return (
    <View>
      <TextInput style={styles.container} value={nameCelula} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    fontSize: 28,
    textAlign: 'center',
  },
});

export default InputName;
