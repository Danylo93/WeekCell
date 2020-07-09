import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.name} - {item.funcao}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
    color: Colors.white,
  },
  entry: {
    color: Colors.white,
    marginBottom: 10,
  },
});

export default EntrySummaryList;
