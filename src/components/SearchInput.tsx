import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import {SearchIcon} from '../icons/SearchIcon';
import {XIcon} from '../icons/XIcon';

import {Colors} from '../Colors';
import {Text} from './Text';

interface SearchInputProps {
  value?: string;
  onChange: (value: string) => void;
  onClose?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  style?: ViewStyle;
  editable?: boolean;
}

export const SearchInput = ({
  value,
  placeholder,
  autoFocus,
  style,
  editable = true,
  onChange,
  onClose,
}: SearchInputProps) => (
  <View style={[styles.container, style]}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.Secondary.GreyHalf}
      value={value}
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        onChange(e.nativeEvent.text);
      }}
      autoFocus={autoFocus}
      editable={editable}
    />

    {onClose !== undefined && (
      <TouchableWithoutFeedback containerStyle={styles.close} onPress={onClose}>
        <XIcon size={24} color={Colors.Secondary.GreyDark} />
      </TouchableWithoutFeedback>
    )}

    <View style={styles.icon}>
      <SearchIcon size={22} color={Colors.Secondary.GreyDark} />
    </View>
  </View>
);

type SearchButtonProps = {
  text: string;
  style: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
};

export const SearchButton = ({
  text,
  style,
  textStyle = {width: '100%'},
  onPress,
}: SearchButtonProps) => (
  <TouchableWithoutFeedback style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{text}</Text>

    <View style={styles.icon}>
      <SearchIcon color={Colors.Primary.Blue} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
    paddingLeft: 54,
    paddingRight: 24,
    backgroundColor: Colors.Secondary.GreyOff,
  },

  text: {
    color: Colors.Primary.Navy,
  },

  input: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    paddingRight: 24,
    fontSize: 16,
    color: Colors.Primary.Navy,
  },

  icon: {
    position: 'absolute',
    left: 20,
    top: 14,
  },

  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 50,
    zIndex: 10,
  },
});
