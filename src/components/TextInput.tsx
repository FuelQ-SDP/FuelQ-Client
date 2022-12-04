import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {Text} from './Text';
import {Colors} from '../Colors';
import {ComponentStyles} from './Styles';

interface CustomProps {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  touched?: boolean;
  block?: boolean;
}

interface TextInputProps extends CustomProps, RNTextInputProps {}

export const TextInput = forwardRef<any, TextInputProps>(
  (
    {
      label,
      isError,
      errorMessage,
      touched,
      autoCapitalize = 'sentences',
      block,
      editable = true,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={{opacity: editable ? 1 : 0.4}}>
        {label && <Text style={ComponentStyles.inputText}>{label}</Text>}
        <RNTextInput
          ref={ref}
          style={[ComponentStyles.input, block && ComponentStyles.inputBlock]}
          placeholderTextColor={Colors.Secondary.GreyHalf}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          editable={editable}
          {...rest}
        />
        <Text style={ComponentStyles.inputError}>
          {touched && isError ? errorMessage : ' '}
        </Text>
      </View>
    );
  },
);
