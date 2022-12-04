import React, {forwardRef, useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
} from 'react-native';

import {Colors} from '../Colors';
import {MaskedEye} from '../icons/MaskedEye';
import {UnmaskedEye} from '../icons/UnmaskedEye';
import {Text} from './Text';
import {ComponentStyles} from './Styles';

interface CustomProps {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  touched?: boolean;
}

interface TextInputProps extends RNTextInputProps, CustomProps {}

export const PasswordInput = forwardRef<any, TextInputProps>(
  ({label, isError, errorMessage, touched, ...rest}, ref) => {
    const [isMasked, shouldMask] = useState(true);
    return (
      <View>
        {label && <Text style={ComponentStyles.inputText}>{label}</Text>}
        <View>
          <RNTextInput
            ref={ref}
            style={[ComponentStyles.input]}
            placeholderTextColor={Colors.Secondary.GreyHalf}
            secureTextEntry={isMasked === true}
            autoCapitalize={'none'}
            {...rest}
          />
          <View style={[ComponentStyles.inputIconWrapper]}>
            <TouchableOpacity onPress={() => shouldMask(!isMasked)}>
              {isMasked ? (
                <MaskedEye size={22} color={Colors.Secondary.GreyDark} />
              ) : (
                <UnmaskedEye size={22} color={Colors.Secondary.GreyDark} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={ComponentStyles.inputError}>
          {touched && isError ? errorMessage : ' '}
        </Text>
      </View>
    );
  },
);
