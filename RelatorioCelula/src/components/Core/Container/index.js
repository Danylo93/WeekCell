import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Color from '../../../styles/Colors';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}> {actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Text style={styles.actionButtonIcon}>+</Text>
              <Text style={styles.actionButtonText}> {actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.asphalt,
    margin: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    padding: 8,
  },
  title: {
    fontSize: 20,
    color: Color.white,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 10,
    color: Color.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    fontSize: 12,
    color: Color.yellow,
    paddingStart: 7,
  },
  actionButtonText: {
    fontSize: 12,
    color: Color.yellow,
  },
});

export default Container;
