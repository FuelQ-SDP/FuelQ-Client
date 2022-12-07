import React, {useCallback, useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ListRenderItem,
  Dimensions,
} from 'react-native';
import {PaginationDots} from '../../../components/PaginationDots';
import {HeroCard} from './HeroCard';
import {useVehicle} from '../../../context/Vehicle';

const {width} = Dimensions.get('window');
const itemSeparatorWidth = 20;
const itemWidth = width * 0.8;

export const HeroCarousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const {vehicles} = useVehicle();
  const renderItem: ListRenderItem<Vehicle> = ({item}) => (
    <HeroCard vehicle={item} onPress={() => {}} />
  );

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const keyExtractor = useCallback((item: Vehicle) => {
    return `HeroCarousel-Item-${item.id} `;
  }, []);

  return (
    <>
      <Animated.FlatList
        data={vehicles}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        bounces={false}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContainer}
        snapToInterval={itemWidth + itemSeparatorWidth}
        ItemSeparatorComponent={renderItemSeparator}
        disableIntervalMomentum
        keyExtractor={keyExtractor}
      />
      <PaginationDots
        data={vehicles}
        scrollX={scrollX}
        containerStyle={styles.paginationContainer}
        itemWidth={itemWidth}
        itemSeparatorWidth={itemSeparatorWidth}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: itemSeparatorWidth * 2,
    marginBottom: 20,
    marginTop: 40,
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
});
