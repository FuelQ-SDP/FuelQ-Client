import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../Colors';
import {FontSize, Text} from '../../../components/Text';
import {ChevronRightIcon} from '../../../icons/ChevronRight';
import {Styles} from '../../../Styles';

interface MenuItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  imageUrl?: any;
  badge?: {isVisible: boolean; count?: number};
  onPress: () => void;
}

export const MenuItem = ({title, subtitle, icon, onPress}: MenuItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <View style={styles.content}>
        <Text>{title}</Text>
        {subtitle && <Text small>{subtitle}</Text>}
      </View>
      <ChevronRightIcon size={24} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.Primary.White,
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    ...Styles.shadowCenter,
  },

  image: {
    width: 24,
    height: 24,
    marginRight: 16,
    borderRadius: 12,
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    marginRight: 16,
    backgroundColor: Colors.Primary.Orange,
    borderRadius: 5,
  },

  content: {
    flex: 1,
  },

  badgeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});