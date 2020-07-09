import {getRealm} from './Realm';
import moment from '../vendors/moment';
import {Collection} from 'realm';

export const getBalance = async (untilDays = 0) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (untilDays > 0) {
    const date = moment()
      .subtract(untilDays, 'days')
      .toDate();

    entries = entries.filtered('entryAt < 0', date);
  }

  return entries.sum('quantidade');
};

export const getBalanceSumByteDate = async days => {
  const realm = await getRealm();

  const startBalance = await getBalance(days);

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment()
      .subtract(days, 'days')
      .toDate();

    entries = entries.filtered('entryAt >= 0', date);
  }

  entries = entries.sorted('entryAt');

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'quantidade'))
    .map((quantidade, index, collection) => {
      (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        quantidade;
    });

  console.log(JSON.stringify(entries));

  return entries;
};
