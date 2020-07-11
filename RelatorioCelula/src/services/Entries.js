import {Alert} from 'react-native';
import {getRealm} from './Realm';
import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';
import moment from '../../src/vendors/moment';
import 'react-native-get-random-values';

export const getEntries = async (days, funcao, quantidade) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    console.log('getEntries :: days', days);
    realm = realm.filtered('entryAt >= $0', date);
  }
  if (funcao && funcao.id) {
    console.log('getEntries :: funcao', JSON.stringify(funcao));
    realm = realm.filtered('funcao == $0', String(funcao));
  }
  if (quantidade) {
    console.log('getEntries :: quantidade', JSON.stringify(quantidade));
    realm = realm.filtered('quantidade == $0', quantidade);
  }

  const entries = realm.sorted('entryAt', true);

  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || uuidv1(),
        name: value.name || entry.name,
        idade: value.idade || entry.idade,
        funcao: value.funcao || entry.funcao,
        quantidade: value.quantidade || entry.quantidade,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
      Alert.alert('Dados Salvos com Sucesso');
    });
  } catch (error) {
    Alert.alert('Erro ao Salvar os Dados');
    console.log(error.message);
  }

  return data;
};

export const deleteEntry = async entry => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
      Alert.alert('Dados excluídos com Sucesso!!');
    });
  } catch (error) {
    console.error(
      'deleteEntry:: Error on delete object',
      JSON.stringify(entry),
      console.log(error.message),
    );
    Alert.alert('Erro ao excluir este lançamento');
  }
};
