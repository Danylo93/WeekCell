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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.redDark,
    width: 59,
    height: 59,
    marginHorizontal: 180,
    marginTop: -58,
  },
});

export default NewEntryDeleteAction;
