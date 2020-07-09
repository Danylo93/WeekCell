import React from 'react';
import Container from '../../components/Core/Container';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryFreq from './EntrySummaryFreq';
import {View, StyleSheet} from 'react-native';

const entriesGrouped = [
  {key: '1', funcao: 'Membro', quantidade: 1},
  {key: '2', funcao: 'Frequntador', quantidade: 20},
  {key: '3', funcao: 'Visitante', quantidade: ''},
];

const EntrySummary = ({days = 7, onPressActionButton}) => {
  return (
    <Container
      title="Funções da Célula"
      actionLabelText={`Ultimos ${days} dias`}
      actionButtonText="Ver mais..."
      onPressActionButton={onPressActionButton}>
      <View style={styles.inner}>
        <EntrySummaryFreq />
        <EntrySummaryList entriesGrouped={entriesGrouped} />
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
