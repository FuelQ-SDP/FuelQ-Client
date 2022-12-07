import React from 'react';
import {StyleSheet, View, Animated, ListRenderItem} from 'react-native';
import {CategoryCard} from './CategoryCard';
import {Pressable} from '../../../components/Button/Pressable';
import {Text} from '../../../components/Text';
import {Categories} from '../../../../assets/data/Categories';
import {Font} from '../../../Fonts';
import {Colors} from '../../../Colors';

const itemSeparatorWidth = 24;

interface CategoryCarouselProps {
  horizontal: boolean;
  onPressItem: (title: string) => void;
  onPressSeeMore?: () => void;
}

export const CategoryCarousel = ({
  horizontal,
  onPressItem,
  onPressSeeMore,
}: CategoryCarouselProps) => {
  const renderItem: ListRenderItem<any> = ({item, index}) => (
    <CategoryCard
      key={`Category_Carousel_${index}`}
      {...item}
      onPress={() => onPressItem(item.title)}
      horizontal={horizontal}
    />
  );

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <>
      {horizontal && (
        <View style={styles.bottomContainer}>
          <Text style={[styles.buttonBottomText, styles.buttonLeftText]}>
            Categories
          </Text>
          <Pressable onPress={onPressSeeMore} style={styles.buttonRight}>
            <Text style={[styles.buttonBottomText, styles.buttonRightText]}>
              See All
            </Text>
          </Pressable>
        </View>
      )}
      <Animated.FlatList
        data={Categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        bounces={false}
        decelerationRate={'fast'}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparator}
        disableIntervalMomentum
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: itemSeparatorWidth,
    marginVertical: 10,
  },
  list: {
    margin: 20,
  },
  itemSeparator: {
    width: itemSeparatorWidth,
    height: itemSeparatorWidth,
  },
  paginationContainer: {
    marginBottom: 24,
  },

  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonRight: {
    paddingRight: 24,
  },
  buttonBottomText: {
    fontFamily: Font.Medium,
  },
  buttonLeftText: {
    marginLeft: 24,
    color: Colors.Primary.Navy,
  },
  buttonRightText: {
    color: Colors.Primary.Blue,
  },
});
