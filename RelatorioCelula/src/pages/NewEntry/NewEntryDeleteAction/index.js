import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';

const NewEntryDeleteAction = ({entry, onOkPress}) => {
  const onDelete = () => {
    Alert.alert(
      'Como assim parça?',
      'Você realmente deseja apagar esse lançamento?',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', onPress: () => onOkPress()},
      ],
      {cancelable: false},
    );
  };

  return (
    entry.id && (
      <View>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="delete" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.red,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewEntryDeleteAction;
