import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from '../../../vendors/moment';
import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry.funcao.color || Colors.white;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}

            <Circle
              cx="9"
              cy="25"
              r="8"
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.nameText}> {entry.name}</Text>
          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={12} />
            <Text style={styles.entryAtText}>
              {moment(entry.entryAt).calendar()}
            </Text>
            {entry.address && (
              <>
                <Icon style={styles.adressIcon} name="person-pin" size={12} />
                <Text style={styles.adressIconText}>{entry.address}</Text>
                {entry.address.length > 40
                  ? entry.address.substring(0, 40 - 3) + '...'
                  : entry.address}
              </>
            )}
          </View>
        </View>

        <View style={styles.idade}>
          <Text style={styles.idadeText}>Idade:</Text>

          <Text style={styles.idadeRecebe}>{entry.idade}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },

  nameText: {
    fontSize: 17,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
  },

  entryAtText: {
    justifyContent: 'center',
    color: Colors.metal,
  },
  adressIcon: {
    color: Colors.metal,
    marginTop: 2,
    marginRight: 2,
    marginLeft: 5,
  },
  adressIconText: {
    color: Colors.metal,
  },
  idade: {
    justifyContent: 'center',
  },

  idadeText: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: 'bold',
  },
  idadeRecebe: {
    fontSize: 12,
    color: Colors.yellow,
    fontWeight: 'bold',
  },
});

export default EntryListItem;
