import {getRealm} from './Realm';

import _ from 'lodash';
import moment from '../vendors/moment';

export const getBalance = async (untilDays = 0) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (untilDays > 0) {
    const date = moment()
      .subtract(untilDays, 'days')
      .toDate();

    entries = entries.filtered('entryAt < $0', date);
  }

  return entries.sum('quantidade');
};

export const getBalanceSumByDate = async days => {
  const realm = await getRealm();

  const startBalance = (await getBalance(days)) || 0;

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'quantidade'))
    .map((quantidade, index, collection) => {
      return (
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        quantidade
      );
    });

  console.log('getBalanceSumByDate :: ', JSON.stringify(entries));

  return entries;
};

export const getBalanceSumByCategory = async (days, showOthers = true) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = _(entries)
    .groupBy(({funcao: {id}}) => id)
    .map(entry => ({
      funcao: _.omit(entry[0].funcao, 'entries'),
      quantidade: Math.abs(_.sumBy(entry, 'quantidade')),
    }))
    .filter(({quantidade}) => quantidade > 0)
    .orderBy('quantidade', 'desc');

  console.log('getBalanceSumByCategory :: ', JSON.stringify(entries));

  return entries;
};

// Salario 1000 - 19/11
// Aluguel -900 - 19/11
// Compras -10 -  21/11
// Compras -20 -  22/11

// [
//   {category: Salário, amount: 1000}
//   {category: Aluguel, amount: -900}
//   {category: Compras, amount: -30}
// ]
