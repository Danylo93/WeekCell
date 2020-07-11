import React from 'react';
import Container from '../../components/Core/Container';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryFreq from './EntrySummaryFreq';
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

import {View, StyleSheet} from 'react-native';

const EntrySummary = ({days = 7, onPressActionButton}) => {
  const [balanceSum] = useBalanceSumByCategory(days);

  return (
    <Container
      title="Funções da Célula"
      actionLabelText={`Ultimos ${days} dias`}
      actionButtonText="Ver mais..."
      onPressActionButton={onPressActionButton}>
      <View style={styles.inner}>
        <EntrySummaryFreq data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default EntrySummary;
