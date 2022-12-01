import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontSize, Text} from '../../../components/Text';

interface AuthenticationHeaderProps {
  firstTitle?: string;
  mainTitle?: string;
  subTitle?: string;
  margin?: boolean;
}
export const AuthenticationHeader = ({
  firstTitle,
  mainTitle,
  subTitle,
  margin,
}: AuthenticationHeaderProps) => {
  return (
    <View style={{marginTop: margin ? '20%' : 0}}>
      {firstTitle && <Text fontSize={FontSize.H2}>{firstTitle}</Text>}
      {mainTitle && <Text fontSize={FontSize.H1}>{mainTitle}</Text>}
      {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginTop: '5%',
  },
});
