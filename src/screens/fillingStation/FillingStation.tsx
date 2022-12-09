import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, View, Linking} from 'react-native';
import MapView from 'react-native-maps';
import {Colors} from '../../Colors';
import {Pressable} from '../../components/Button/Pressable';
import {FontSize, Text} from '../../components/Text';
import {Font} from '../../Fonts';
import {ArrowLeft} from '../../icons/ArrowLeft';
import {DirectionIcon} from '../../icons/Direction';
import {PhoneIcon} from '../../icons/Phone';
import {Car} from '../../icons/Vehicles/Car';
import {MotorCycle} from '../../icons/Vehicles/MotorCycle';
import {ThreeWheeler} from '../../icons/Vehicles/ThreeWheeler';
import {HomeStackParamList} from '../../navigators/Home';
import {Styles} from '../../Styles';
import {useFillingStation} from '../../context/FilingStations';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type NavigationProps = StackNavigationProp<HomeStackParamList, 'FilingStation'>;
type RouteProps = RouteProp<HomeStackParamList, 'FilingStation'>;

export const FillingStation = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {
    params: {id},
  } = useRoute<RouteProps>();
  const {top} = useSafeAreaInsets();

  const {getById} = useFillingStation();
  const fs = getById(id);

  return (
    <View style={styles.root}>
      <Pressable
        onPress={goBack}
        style={[
          styles.backButton,
          {
            top: top + 10,
          },
        ]}>
        <ArrowLeft />
      </Pressable>
      <ScrollView>
        <View style={styles.heroContainer}>
          <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
          <View style={styles.heroBackdrop} />
          <View
            style={[
              styles.heroTopContainer,
              {
                marginTop: top + 60,
              },
            ]}>
            <Text fontSize={FontSize.H1} style={styles.fName}>
              {fs?.stationName}
            </Text>
          </View>
          <View style={styles.heroBottomContainer}>
            <Text fontSize={FontSize.H5} style={styles.fAddress}>
              {fs?.address}
            </Text>
            <View style={styles.fButtonContainer}>
              <Pressable
                onPress={() => {
                  Linking.openURL(`tel:${fs?.phone}`);
                }}
                style={styles.fButton}>
                <PhoneIcon color={Colors.Primary.Orange} size={20} />
              </Pressable>
              <View style={styles.fButtonSeparator} />
              <Pressable style={styles.fButton}>
                <DirectionIcon color={Colors.Primary.Orange} size={20} />
              </Pressable>
            </View>
          </View>
        </View>

        <Text style={styles.topSubTitle} fontSize={FontSize.H4}>
          The Last Distribution
        </Text>
        <View style={styles.queueCard}>
          <View style={styles.deliverDetailsContainer}>
            <Text>Delivered Date: </Text>
            <Text style={styles.deliveryDetailText}>22.12.2022</Text>
          </View>
          <View style={styles.deliverDetailsContainer}>
            <Text>Delivered Stock: </Text>
            <Text style={styles.deliveryDetailText}>33000 L</Text>
          </View>
          <View>
            <Text
              style={{
                marginVertical: 4,
              }}
              center>
              Distribution
            </Text>
            <View style={styles.distributionRootContainer}>
              <View style={styles.distributionVehicleContainer}>
                <ThreeWheeler size={19} color={Colors.Primary.Orange} />
                <View style={styles.distributionVehicleSeparator} />
                <Text style={styles.distributionVehicleText}>35</Text>
              </View>

              <View style={styles.distributionVehicleContainer}>
                <Car size={19} color={Colors.Primary.Orange} />
                <View style={styles.distributionVehicleSeparator} />
                <Text style={styles.distributionVehicleText}>35</Text>
              </View>

              <View style={styles.distributionVehicleContainer}>
                <MotorCycle size={19} color={Colors.Primary.Orange} />
                <View style={styles.distributionVehicleSeparator} />
                <Text style={styles.distributionVehicleText}>35</Text>
              </View>

              <View style={styles.distributionVehicleContainer}>
                <MotorCycle size={19} color={Colors.Primary.Orange} />
                <View style={styles.distributionVehicleSeparator} />
                <Text style={styles.distributionVehicleText}>35</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.subTitle} fontSize={FontSize.H4}>
          on Going Queue
        </Text>

        <View style={styles.queueCard}>
          <Text style={styles.queueText} fontSize={FontSize.H4}>
            12
          </Text>
          <View style={styles.estimationContainer}>
            <Text>Est Delivery Date: </Text>
            <Text style={styles.estimationDateText}>22.12.2022</Text>
          </View>
        </View>

        <Pressable style={styles.requestButton}>
          <Text
            style={{
              color: Colors.Primary.White,
            }}
            fontSize={FontSize.H5}>
            Request Token
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.Label.OffBlue,
    zIndex: 888,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer: {
    backgroundColor: 'red',
    aspectRatio: 4 / 3,
    justifyContent: 'space-between',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
  },
  heroBackdrop: {
    backgroundColor: Colors.Primary.Navy,
    opacity: 0.4,
    ...StyleSheet.absoluteFill,
  },
  heroTopContainer: {
    flexDirection: 'row',
  },
  fName: {color: Colors.Primary.White},
  heroBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  fAddress: {
    width: '40%',
    color: Colors.Primary.White,
  },
  fButtonContainer: {
    flexDirection: 'row',
  },
  fButtonSeparator: {
    width: 16,
  },
  fButton: {
    backgroundColor: Colors.Primary.White,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSubTitle: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  deliverDetailsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginVertical: 4,
  },
  deliveryDetailText: {
    fontFamily: Font.Medium,
    color: Colors.Primary.Navy,
  },
  subTitle: {
    marginHorizontal: 24,
  },
  queueCard: {
    ...Styles.shadowDefault,
    margin: 24,
    backgroundColor: Colors.Primary.White,
    padding: 16,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  estimationContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  estimationDateText: {
    fontFamily: Font.Medium,
    color: Colors.Primary.Navy,
  },
  distributionRootContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  distributionVehicleContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.Label.OffGreen,
    padding: 4,
    borderRadius: 8,
  },
  distributionVehicleText: {
    fontFamily: Font.Medium,
    color: Colors.Primary.Navy,
  },
  distributionVehicleSeparator: {
    width: 4,
  },
  queueText: {
    marginBottom: 8,
  },
  requestButton: {
    backgroundColor: Colors.Primary.Navy,
    padding: 16,
    borderRadius: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
  },
});
