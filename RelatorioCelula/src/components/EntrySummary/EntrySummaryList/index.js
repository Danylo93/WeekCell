import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

//import Colors from '../../../styles/Colors';
import EntrySummaryListItem from '../EntrySummaryList/EntrySummaryListItem';

const EntrySummaryList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({item}) => <EntrySummaryListItem entry={item} />}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 40,
  },
});

export default EntrySummaryList;
