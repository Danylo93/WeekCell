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
import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryIdade from '../NewEntry/NewEntryIdade';
import NewEntryAddressPicker from '../NewEntry/NewEntryAddressPicker';
import NewEntryDatePicker from '../NewEntry/NewEntryDatePicker';

import NewEntryDeleteAction from '../NewEntry/NewEntryDeleteAction';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    name: '',
    idade: '',
    funcao: {id: null, name: 'Selecione'},
    quantidade: 1,
    entryAt: new Date(),
  });

  const [funcao, setFuncao] = useState(entry.funcao);
  const [name, setName] = useState(entry.name);
  const [idade, setIdade] = useState(entry.idade);
  const [quantidade, setQuantidade] = useState(entry.quantidade);

  //const [debit, setDebit] = useState(entry.debit);

  const isValid = () => {
    if (name !== 'Nome' && funcao !== 'Funçao') {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      funcao: String(funcao),
      name: name,
      idade: idade,
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

        <NewEntryCategoryPicker funcao={funcao} onChangeCategory={setFuncao} />
        <View style={styles.inner}>
          <NewEntryDatePicker />
          <NewEntryAddressPicker />
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
