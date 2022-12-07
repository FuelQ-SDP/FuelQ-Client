import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../../../Colors';
import {Pressable} from '../../../../components/Button/Pressable';
import {FontSize, Text} from '../../../../components/Text';
import QRCodeView from 'react-native-qrcode-svg';

export const QRCode = () => {
  return (
    <Pressable style={styles.root}>
      <QRCodeView value="http://awesome.link.qr" />
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
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
