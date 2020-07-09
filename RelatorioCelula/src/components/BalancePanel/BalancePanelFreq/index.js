import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-svg-charts';
import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate';

const BalancePanelFreq = () => {
  const [balanceSum] = useBalanceSumByDate();
  const data = [100, 80, 30, 100, 10, 35, 70];

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        svg={{
          fill: 'rgba(0,0,0, .1)',
          stroke: 'rgba(0,0,0, .1)',
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -20,
    marginBottom: 12,
  },
  chart: {
    height: 40,
  },
});

export default BalancePanelFreq;
