import React, {useCallback, useState} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigators/Home';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {ArrowLeft} from '../../icons/ArrowLeft';
import {SearchInput} from '../../components/SearchInput';
import {RootStackParamList} from '../../navigators/Root';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable} from '../../components/Button/Pressable';
import {StationRow} from './components/StationRow';
import {FunnelIcons} from '../../icons/Funnel';
import {SortModalModal} from './components/SortModal';
import {useFillingStation} from '../../context/FilingStations';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'FilingStationSearch'>,
  StackNavigationProp<RootStackParamList>
>;

export const FilingStationSearch = () => {
  const {goBack, navigate} = useNavigation<NavigationProps>();
  const [showSortModal, setShowSortModal] = useState(false);
  const {filingStations} = useFillingStation();
  const itemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const renderItem: ListRenderItem<FillingStation> = ({item}) => (
    <StationRow
      fs={item}
      onPress={() =>
        navigate('FilingStation', {
          id: item.id,
        })
      }
    />
  );

  const keyExtractor = useCallback((item: FillingStation) => {
    return `fs-Item-${item.id} `;
  }, []);

  return (
    <>
      <View style={styles.root}>
        <Header
          title={'Filling Stations'}
          leftIcon={<ArrowLeft />}
          onPressLeft={() => goBack()}
          backgroundColor="white"
        />
        <View style={styles.searchContainer}>
          <SearchInput
            style={styles.search}
            onChange={value => {}}
            onClose={() => {}}
            value={''}
          />
          <Pressable
            onPress={() => {
              setShowSortModal(true);
            }}
            style={styles.filterButton}>
            <FunnelIcons size={20} color={Colors.Secondary.Red} />
          </Pressable>
        </View>
        <FlatList
          data={filingStations}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparatorComponent}
          style={styles.list}
          keyExtractor={keyExtractor}
        />
      </View>
      <SortModalModal
        show={showSortModal}
        onClose={() => {
          setShowSortModal(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  searchContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 16,
    marginHorizontal: 24,
  },
  search: {
    marginRight: 16,
  },
  list: {
    marginTop: 16,
  },
  filterButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.Label.OffRed,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    height: 16,
  },
});
