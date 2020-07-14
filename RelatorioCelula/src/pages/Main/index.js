import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';
import BalancePanel from '../../components/BalancePanel';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel
        onNewEntryPress={() => navigation.navigate('NewEntry')}
        onHomeApp={() => navigation.navigate('Home')}
      />

      <EntrySummary
        style={styles.summaryList}
        onPressActionButton={() => navigation.navigate('Report')}
      />

      <EntryList
        onPressActionButton={() => navigation.navigate('Report')}
        onEntryPress={entry =>
          navigation.navigate('NewEntry', {
            entry: entry,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
  summaryList: {
    marginTop: 5,
  },
});

export default Main;
