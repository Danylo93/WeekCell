import {getRealm} from './Realm';
import {v1 as uuidv1} from 'uuid';
import _ from 'lodash';
import moment from '../vendors/moment';
import Colors from '../styles/Colors';

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
    .groupBy(({category: {id}}) => id)
    .map(entry => ({
      category: _.omit(entry[0].category, 'entries'),
      quantidade: Math.abs(_.sumBy(entry, 'quantidade')),
    }))
    .filter(({quantidade}) => quantidade > 0)
    .orderBy('quantidade', 'desc');

  const othersLimit = 3;

  if (showOthers && _.size(entries) >= othersLimit) {
    const data1 = _(entries).slice(0, othersLimit);

    const data2 = [
      {
        category: {id: uuidv1(), name: 'Outros', color: Colors.metal},
        quantidade: _(entries)
          .slice(othersLimit)
          .map(({quantidade}) => quantidade)
          .sum(),
      },
    ];

    entries = [...data1, ...data2];
  }

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
