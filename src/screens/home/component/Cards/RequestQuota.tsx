import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';
import {Pressable} from '../../../../components/Button/Pressable';
import {FontSize, Text} from '../../../../components/Text';

interface RequestQuotaProps {
  onPress: () => {};
}

export const RequestQuota = ({onPress}: RequestQuotaProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text center fontSize={FontSize.H1}>
        Request ⛽️
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Label.OffBlue,
    padding: 16,
    borderRadius: 16,
    width: '100%',
    marginTop: 20,
  },
});
