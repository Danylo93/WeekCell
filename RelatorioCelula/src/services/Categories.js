import 'react-native-get-random-values';
//import {getUUID} from './UUID';
import {getRealm} from './Realm';
import {v1 as uuidv1} from 'uuid';

export const getDefaultCategories = () => {
  return [
    {
      id: uuidv1(),
      name: 'Membro',
      color: '#8AFF00',
      isFuncao: true,
      order: 0,
    },
    {
      id: uuidv1(),
      name: 'Frequentador',
      color: '#27ae60',
      isFuncao: true,
      order: 1,
    },
    {
      id: uuidv1(),
      name: 'Visitante',
      color: '#8c7ae6',
      isFuncao: true,
      order: 2,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').sorted('order');
};

export const getFuncaoCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isFuncao = true AND isInit = false')
    .sorted('order');
};

export const getQuantidadeCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isQuantidade = true AND isInit = false')
    .sorted('order');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order');
};
