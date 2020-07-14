import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
//import useBalanceSumCategory from '../../../hooks/useBalanceSumByCategory';

const EntrySummaryFreq = ({data}) => {
  const chartData = data.map(({category, quantidade}) => ({
    key: category.id,
    value: quantidade,
    svg: {
      fill: category.color,
    },
    arc: {
      outerRadius: '100%',
      innerRadius: '80%',
    },
  }));

  return (
    <View style={styles.container}>
      <PieChart style={styles.chart} data={chartData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  chart: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
});

export default EntrySummaryFreq;
