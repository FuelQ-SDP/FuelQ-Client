import React from 'react';
import {Animated, StyleSheet, View, ViewStyle} from 'react-native';

import {Colors} from '../Colors';

export interface PaginationDotsProps {
  data: Array<Object>;
  scrollX: Animated.Value;
  containerStyle?: ViewStyle;
  itemWidth: number;
  itemSeparatorWidth: number;
}

const activeDotColor = Colors.Primary.Orange;
const inActiveDotOpacity = 0.5;
const activeDotScale = 1.4;

export const PaginationDots = ({
  scrollX,
  data,
  containerStyle,
  itemWidth,
  itemSeparatorWidth,
}: PaginationDotsProps) => {
  if (data.length <= 1) {
    return <></>;
  }

  const width = itemWidth + itemSeparatorWidth;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [inActiveDotOpacity, 1, inActiveDotOpacity],
          extrapolate: 'clamp',
        });
        const scale = scrollX.interpolate({
          inputRange: inputRange,
          outputRange: [1, activeDotScale, 1],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`dot-${index}`}
            style={[
              styles.dotStyle,
              {opacity},
              {transform: [{scale}]},
              {backgroundColor: activeDotColor},
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});
