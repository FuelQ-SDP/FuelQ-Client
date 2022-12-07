import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Colors} from '../../../Colors';
import {FontSize, Text} from '../../../components/Text';
import {getVehicleIcon} from '../../../icons/Vehicles';
import {Styles} from '../../../Styles';
import {VehicleType} from '../../../types/appEnums';

const {width} = Dimensions.get('window');
const itemWidth = width * 0.8;

interface HeroCardProps {
  vehicle: Vehicle;
  onPress: () => void;
}

export const HeroCard = ({vehicle, onPress}: HeroCardProps) => {
  const VehicleIcon = getVehicleIcon(
    vehicle.vehicleType as unknown as VehicleType,
  );
  return (
    <TouchableWithoutFeedback key={vehicle.id} onPress={onPress}>
      <View style={[Styles.card, styles.container]}>
        <Text fontSize={FontSize.H1}>{vehicle.vehicleNo}</Text>
        <View>
          <Text>Last Fuel </Text>
          <Text fontSize={FontSize.H1}>Friday </Text>
        </View>
        <View style={styles.iconContainer}>
          <VehicleIcon size={75} color={Colors.Primary.Orange} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: itemWidth / 2,
    padding: 16,
    borderRadius: 20,
    backgroundColor: Colors.Primary.White,
    justifyContent: 'space-between',
  },

  fillImage: {
    width: itemWidth,
    height: 80,
    flex: 1,
    borderRadius: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
