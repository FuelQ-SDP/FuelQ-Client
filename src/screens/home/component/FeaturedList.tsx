import React from 'react';
import {StyleSheet, View, ListRenderItem, FlatList} from 'react-native';
import {Pressable} from '../../../components/Button/Pressable';
import {Text} from '../../../components/Text';
import {Font} from '../../../Fonts';
import {Colors} from '../../../Colors';
import {ProductCard} from '../../../components/ProductCard';
import {DummyItems} from '../../../../assets/data/Items';

const itemSeparatorWidth = 24;

interface FeaturedListProps {
  onPressItem: (item: Item) => void;
  onPressSeeMore?: () => void;
  noOfItems?: number;
}

export const FeaturedList = ({
  onPressItem,
  onPressSeeMore,
  noOfItems,
}: FeaturedListProps) => {
  const renderItem: ListRenderItem<Item> = ({item, index}) => (
    <ProductCard
      key={`Category_Carousel_${index}`}
      item={item}
      onPress={() => onPressItem(item)}
    />
  );

  return (
    <View style={onPressSeeMore ? styles.root : styles.rootWithoutBR}>
      {onPressSeeMore && (
        <View style={styles.buttonContainer}>
          <Text style={[styles.buttonBottomText, styles.buttonLeftText]}>
            Featured Product
          </Text>
          <Pressable onPress={onPressSeeMore} style={styles.buttonRight}>
            <Text style={[styles.buttonBottomText, styles.buttonRightText]}>
              See All
            </Text>
          </Pressable>
        </View>
      )}
      <FlatList
        data={noOfItems ? DummyItems.slice(0, noOfItems) : DummyItems}
        renderItem={renderItem}
        scrollEnabled={onPressSeeMore ? false : true}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: itemSeparatorWidth,
              height: itemSeparatorWidth,
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.Secondary.GreyOff,
    paddingTop: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rootWithoutBR: {
    backgroundColor: Colors.Primary.White,
    paddingTop: 24,
  },
  listContainer: {
    paddingBottom: 40,
  },
  list: {
    margin: 20,
  },
  itemSeparator: {
    width: itemSeparatorWidth,
  },
  paginationContainer: {
    marginBottom: 24,
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
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
