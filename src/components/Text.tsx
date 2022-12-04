import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';

import {Colors} from '../Colors';
import {Font} from '../Fonts';

export enum FontSize {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
}

interface TextProps extends RNTextProps {
  children: any;
  center?: boolean;
  small?: boolean;
  wrap?: boolean;
  muted?: boolean;
  fontSize?: FontSize;
  formatted?: boolean;
}

export const Text = ({
  children,
  fontSize = FontSize.P,
  center = false,
  small = false,
  wrap = false,
  muted = false,
  formatted = false,
  style,
  ...rest
}: TextProps) => {
  if (children == null || children === '') {
    return null;
  }

  const getFontSize = () => {
    switch (fontSize) {
      case FontSize.H1:
        return textStyles.H1;
      case FontSize.H2:
        return textStyles.H2;
      case FontSize.H3:
        return textStyles.H3;
      case FontSize.H4:
        return textStyles.H4;
      case FontSize.H5:
        return textStyles.H5;
      case FontSize.P:
        return textStyles.P;
    }
  };

  const renderChildren = () => {
    if (!formatted) {
      return children;
    }
    if (typeof children === 'number') {
      return `Rs. ${children.toLocaleString('en')}`;
    } else {
      return children;
    }
  };

  return (
    <RNText
      style={[
        small && textStyles.small,
        center && textStyles.textCenter,
        muted && textStyles.muted,
        wrap && textStyles.textWrap,
        {...getFontSize()},
        style,
      ]}
      {...rest}>
      {renderChildren()}
    </RNText>
  );
};

export const textStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },

  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
  },

  small: {
    fontSize: 14,
    lineHeight: 18,
  },

  muted: {
    color: Colors.Label.OffGreen,
  },
  H1: {
    fontSize: 32,
    fontFamily: Font.Bold,
    lineHeight: 48,
    color: Colors.Primary.Navy,
  },
  H2: {
    fontSize: 28,
    fontFamily: Font.Bold,
    lineHeight: 36,
    color: Colors.Primary.Navy,
  },
  H3: {
    fontSize: 24,
    fontFamily: Font.Medium,
    lineHeight: 26,
    color: Colors.Primary.Navy,
  },
  H4: {
    fontSize: 20,
    fontFamily: Font.Medium,
    lineHeight: 24,
    color: Colors.Primary.Navy,
  },
  H5: {
    fontSize: 18,
    fontFamily: Font.Medium,
    lineHeight: 22,
    color: Colors.Primary.Navy,
  },
  P: {
    fontSize: 15,
    fontFamily: Font.Regular,
    lineHeight: 17,
    color: Colors.Secondary.GreyDark,
  },
});
