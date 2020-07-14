import React, {useState} from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

import {saveEntry} from '../../services/Entries';

import {deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';
import ActionFooter, {
  ActionSecondaryAction,
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';

import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';
//import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryIdade from '../NewEntry/NewEntryIdade';
import NewEntryAddressPicker from '../NewEntry/NewEntryAddressPicker';
import NewEntryDatePicker from '../NewEntry/NewEntryDatePicker';

import NewEntryDeleteAction from '../NewEntry/NewEntryDeleteAction';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    name: '',
    idade: '',
    category: {id: null, name: 'Selecione'},
    address: null,
    latitude: null,
    longitude: null,
    quantidade: 1,
    entryAt: new Date(),
  });

  const [category, setCategory] = useState(entry.category);
  const [name, setName] = useState(entry.name);
  const [idade, setIdade] = useState(entry.idade);
  const [entryAt, setEntryAt] = useState(entry.entryAt);
  const [address, setAddress] = useState(entry.address);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);

  const isValid = () => {
    if (String(name) !== 'Nome') {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      category: category,
      name: name,
      idade: idade,
      address: address,
      latitude: latitude,
      longitude: longitude,
      entryAt: entryAt,
    };

    saveEntry(data, entry);

    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);

    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput
          style={styles.input}
          onChangeText={text => setName(text)}
          value={name}
          placeholder="Informe o nome do Membro"
        />

        <NewEntryIdade value={idade} onChangeValue={setIdade} />

        <NewEntryCategoryPicker
          category={category}
          onChangeCategory={setCategory}
        />
        <View style={styles.inner}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryAddressPicker
            address={address}
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude);
              setLongitude(longitude);
              setAddress(address);
            }}
          />
        </View>

        <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
      </View>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <ActionSecondaryAction title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  inner: {
    flexDirection: 'row',
  },

  input: {
    backgroundColor: Colors.white,

    borderStyle: 'solid',

    borderWidth: 1,

    borderColor: Colors.asphalt,

    borderRadius: 15,

    padding: 10,

    margin: 5,
  },
  idade: {
    backgroundColor: Colors.white,

    borderStyle: 'solid',

    borderWidth: 1,

    borderColor: Colors.asphalt,

    borderRadius: 15,

    padding: 10,

    margin: 5,
  },
});

export default NewEntry;
