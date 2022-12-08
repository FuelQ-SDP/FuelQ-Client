import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {MenuItem} from './components/MenuItem';
import {HistoryIcon} from '../../icons/History';
import {SettingsIcon} from '../../icons/Settings';
import {HomeStackParamList} from '../../navigators/Home';
import {ArrowLeft} from '../../icons/ArrowLeft';
import {useAuthentication} from '../../context/Auth';
import {Logout} from '../../icons/Logout';
import {SupportIcon} from '../../icons/Support';
import {InfoIcon} from '../../icons/info';

type NavigationProps = NavigationProp<HomeStackParamList, 'Profile'>;

export const Settings = () => {
  const {goBack, navigate} = useNavigation<NavigationProps>();
  const {onLogout} = useAuthentication();

  return (
    <View style={styles.root}>
      <Header
        title={'Settings'}
        backgroundColor="white"
        leftIcon={<ArrowLeft />}
        onPressLeft={() => goBack()}
      />
      <ScrollView>
        <MenuItem
          icon={<SettingsIcon color={Colors.Primary.White} size={16} />}
          title={'Edit Personal Details'}
          onPress={() => navigate('Profile')}
        />
        <MenuItem
          icon={<SettingsIcon color={Colors.Primary.White} size={16} />}
          title={'Vehicles Information'}
          onPress={() => navigate('VehicleList')}
        />
        <MenuItem
          icon={<HistoryIcon color={Colors.Primary.White} size={16} />}
          title={'History'}
          onPress={() => navigate('History')}
        />

        <MenuItem
          icon={<SupportIcon color={Colors.Primary.White} size={16} />}
          title={'Support'}
          onPress={() => navigate('Support')}
        />

        <MenuItem
          icon={<InfoIcon color={Colors.Primary.White} size={16} />}
          title={'Privacy Policy'}
          onPress={() => navigate('Privacy')}
        />

        <MenuItem
          icon={<Logout color={Colors.Primary.White} size={16} />}
          title={'Logout'}
          onPress={() => onLogout()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
});