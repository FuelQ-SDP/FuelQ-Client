import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {FontSize, Text} from './Text';
import {Colors} from '../Colors';
import {CheckIcon} from '../icons/CheckIcon';

interface CheckboxProps {
  isChecked: boolean;
  label: string;
  description?: string;
  onChecked: (checked: boolean) => void;
  children?: any;
  isError?: boolean;
  testID?: string;
}

export const Checkbox = ({
  isChecked,
  label,
  description,
  onChecked,
  children,
  isError,
  testID,
}: CheckboxProps) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress={() => onChecked(!isChecked)}
      testID={testID}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          {children ? (
            <>{children}</>
          ) : !description ? (
            <Text style={styles.text}>{label}</Text>
          ) : (
            <>
              <Text fontSize={FontSize.H3}>{label}</Text>
              <Text small style={styles.description}>
                {description}
              </Text>
            </>
          )}
        </View>
        <View
          style={[
            styles.circle,
            isChecked && styles.circleChecked,
            isError && styles.error,
          ]}>
          {isChecked && <CheckIcon size={16} color={Colors.Primary.White} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

type CheckboxListProps = {
  items: JSX.Element[];
};

export const CheckboxList = ({items}: CheckboxListProps) => (
  <View style={listStyles.container}>
    {items.map((item, index) => (
      <View key={index} style={listStyles.item}>
        {item}
      </View>
    ))}
  </View>
);

const listStyles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Secondary.GreyDark,
  },
});

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 22,
  },

  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.Primary.Blue,
  },

  circleChecked: {
    borderColor: Colors.Secondary.Green,
    backgroundColor: Colors.Secondary.Green,
  },

  textContainer: {
    marginRight: 16,
  },

  text: {
    fontSize: 16,
    lineHeight: 16,
  },

  description: {
    marginTop: 4,
  },

  error: {
    borderWidth: 2,
    borderColor: Colors.Secondary.Red,
    color: Colors.Secondary.Red,
  },
});
