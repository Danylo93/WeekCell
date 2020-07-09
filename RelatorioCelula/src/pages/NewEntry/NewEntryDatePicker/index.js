import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';
//import DateTimePicker from 'react-native-modal-datetime-picker';

const NewEntryDatePicker = ({value, onChange}) => {
  //const [modalVisible, setModalVisible] = useState(false);
  // const onChangeValue = date => {
  // onChange(date);
  //  };

  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Icon name="today" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 50,
  },
});

export default NewEntryDatePicker;
