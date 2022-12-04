import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../Colors';
import {ComponentStyles} from './Styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Pressable} from './Button/Pressable';
import {Font} from '../Fonts';
import {Text} from './Text';

interface OTPInputProps {
  code: string;
  onRequestResend: () => void;
  onCodeChanged: (code: string) => void;
}

export const OTPInput = ({
  code,
  onRequestResend,
  onCodeChanged,
}: OTPInputProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={ComponentStyles.inputText}>Verification Code</Text>
        <Pressable onPress={onRequestResend}>
          <Text style={styles.resendCode}>Re-send Code</Text>
        </Pressable>
      </View>
      <OTPInputView
        pinCount={6}
        code={code}
        placeholderCharacter={'0'}
        placeholderTextColor={Colors.Secondary.GreyHalf}
        onCodeChanged={onCodeChanged}
        style={styles.otpContainer}
        codeInputFieldStyle={{
          ...ComponentStyles.input,
          ...styles.otpInput,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  otpContainer: {flex: 1},
  otpInput: {
    borderWidth: 0,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  resendCode: {
    fontFamily: Font.Medium,
    color: Colors.Primary.Blue,
  },
});
