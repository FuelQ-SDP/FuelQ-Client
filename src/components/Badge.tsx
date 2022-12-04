import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../Colors';
import {Text} from './Text';

type props = {
  count?: number;
};

export const IconWithBadge = ({count}: props) => {
  return (
    <View style={[styles.wrapper, count ? null : styles.noCount]}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noCount: {
    width: 12,
    height: 12,
  },

  wrapper: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.Secondary.Red,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },

  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    lineHeight: 12,
  },
});
