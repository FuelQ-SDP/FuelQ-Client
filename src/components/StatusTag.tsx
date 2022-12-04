import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../Colors';
import {FontSize, Text} from './Text';

export const StatusTag = () => {
  return (
    <View style={styles.successContainer}>
      <Text fontSize={FontSize.H5} style={styles.successText}>
        Available
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: Colors.Label.OffGreen,
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',
  },
  successText: {
    color: Colors.Secondary.Green,
  },
});
