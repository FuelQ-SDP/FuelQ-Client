import React, {useCallback, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import {Colors} from '../../Colors';
import {Styles} from '../../Styles';
import {FontSize, Text} from '../../components/Text';
import {getVehicleIcon} from '../../icons/Vehicles/';
import {VehicleType as VehicleTypeEnum} from '../../types/appEnums';
import {HomeStackParamList} from '../../navigators/Home';
import {Header} from '../../components/Header';
import {ArrowLeft} from '../../icons/ArrowLeft';
import {useVehicle} from '../../context/Vehicle';
import {Pressable} from '../../components/Button/Pressable';
import {Plus} from '../../icons/Plus';
import {Trash} from '../../icons/Trash';
import {CommonModal} from '../../components/Modal/CommonModal';

type NavigationProps = NavigationProp<HomeStackParamList, 'VehicleList'>;

export const VehicleList = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();
  const {vehicles, onDelete} = useVehicle();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');

  const itemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const renderItem: ListRenderItem<Vehicle> = ({item}) => {
    const VehicleIcon = getVehicleIcon(
      item.vehicleType as unknown as VehicleTypeEnum,
    );

    return (
      <>
        <Pressable containerStyle={styles.vehicleRow} onPress={() => {}}>
          <View style={styles.rightContainer}>
            <Text fontSize={FontSize.H1}>{item.vehicleNo}</Text>
            <View style={styles.bottomContainer}>
              <Text fontSize={FontSize.P}>🚗 : {item.vehicleType}</Text>
              <Text fontSize={FontSize.P}>⛽️ : {item.fuelType}</Text>
            </View>
          </View>
          <VehicleIcon size={48} color={Colors.Primary.Orange} />
        </Pressable>
        <Pressable
          onPress={() => {
            setShowDeleteModal(true);
            setSelectedVehicleId(item.id!);
          }}
          containerStyle={styles.removeButton}>
          <Trash size={20} color={Colors.Secondary.Red} />
        </Pressable>
      </>
    );
  };

  const keyExtractor = useCallback((item: Vehicle) => {
    return `vs-Item-${item.id} `;
  }, []);

  return (
    <View style={styles.root}>
      <Header
        title={'Vehicles'}
        leftIcon={<ArrowLeft />}
        rightIcon={<Plus />}
        onPressLeft={() => goBack()}
        onPressRight={() => {
          navigate('CreateVehicle');
        }}
        backgroundColor="white"
      />
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparatorComponent}
        contentContainerStyle={styles.list}
        keyExtractor={keyExtractor}
      />
      <CommonModal
        show={showDeleteModal}
        title={'Are you sure want to delete?'}
        type="danger"
        onClose={() => setShowDeleteModal(false)}
        buttonPrimaryText={'Delete'}
        buttonOnCloseText={'Cancel'}
        onSuccess={async () => {
          await onDelete(selectedVehicleId);
          setSelectedVehicleId('');
          setShowDeleteModal(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },

  container: {
    padding: 24,
  },

  subtitle: {
    marginTop: '5%',
  },
  list: {marginTop: '10%', marginHorizontal: 24},
  separator: {height: 16},
  rightContainer: {
    flex: 0.8,
  },
  bottomContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  vehicleRow: {
    ...Styles.shadowCenter,
    marginVertical: 10,
    backgroundColor: Colors.Secondary.GreySoft,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  removeButton: {
    position: 'absolute',
    top: -100,
    right: -10,
    width: 30,
    height: 30,
    backgroundColor: Colors.Label.OffRed,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    ...Styles.shadowCenter,
  },
});
