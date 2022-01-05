import {Alert} from 'react-native';
import {getRealm} from './Realm';
import 'react-native-get-random-values';
import {v1 as uuidv1} from 'uuid';
import moment from '../../src/vendors/moment';
import 'react-native-get-random-values';

export const getEntries = async (days, category, quantidade) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    console.log('getEntries :: days', days);
    realm = realm.filtered('entryAt >= $0', date);
  }
  if (category && category.id) {
    console.log('getEntries :: category', JSON.stringify(category));
    realm = realm.filtered('category.id == $0', category.id);
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
        category: value.category || entry.category,
        description: value.category.name,
        quantidade: value.quantidade || entry.quantidade,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
        entryAt: value.entryAt || entry.entryAt || new Date(),
        isInit: value.isInit || false,
        nameCelula: value.nameCelula || entry.nameCelula,
      };

      realm.create('Entry', data, true);
      Alert.alert('Dados Salvos com Sucesso');
    });
    console.log('saveEntry:: data:', JSON.stringify);
  } catch (error) {
    console.error(
      'saveEntry:: Error on save object',
      JSON.stringify(data),
      console.log(error),
    );
    Alert.alert('Erro ao salvar este lançamento');
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
