import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from '../../../components/Text';
import {Styles} from '../../../Styles';

const {width} = Dimensions.get('window');
const itemWidth = width * 0.8;

interface Props {
  title: string;
  icon: React.FunctionComponent<IconProps>;
  iconColor: string;
  backgroundColor: string;
  horizontal: boolean;
  onPress: () => {};
}

export const CategoryCard = ({
  title,
  icon: Icon,
  iconColor,
  backgroundColor,
  onPress,
  horizontal,
}: Props) => {
  if (horizontal) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <View
            style={[styles.iconContainer, {backgroundColor: backgroundColor}]}>
            <Icon size={40} color={iconColor} />
          </View>
          <Text style={styles.text} center>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[Styles.card, styles.verticalContainer]}>
          <View
            style={[styles.iconContainer, {backgroundColor: backgroundColor}]}>
            <Icon size={40} color={iconColor} />
          </View>
          <Text style={styles.verticalText} center>
            {title}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  verticalContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: 70,
    padding: 0,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 8,
  },
  verticalText: {
    marginLeft: 16,
  },
});
