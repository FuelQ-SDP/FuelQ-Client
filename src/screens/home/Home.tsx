import React from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigators/Home';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '../../Colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigators/Root';
import {SettingsIcon} from '../../icons/Settings';
import {Header} from '../../components/Header';
import {HeroCarousel} from './component/HeroCarousel';
import {FontSize, Text} from '../../components/Text';
import {QRCode} from './component/Cards/QRCode';
import {RequestQuota} from './component/Cards/RequestQuota';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export const Home = () => {
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <View style={styles.root}>
      <Header
        title={'Fuel Q'}
        backgroundColor="white"
        rightIcon={<SettingsIcon />}
        onPressRight={() => navigate('Settings')}
      />
      <ScrollView>
        <HeroCarousel />
        <View
          style={{
            paddingHorizontal: 40,
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Text>You Weekly Quota Now Available</Text>
          <RequestQuota
            onPress={() => {
              navigate('FilingStationSearch');
            }}
          />
          {/* <QRCode /> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.Primary.White,
  },
  search: {
    marginTop: 16,
    marginHorizontal: 24,
  },
});
