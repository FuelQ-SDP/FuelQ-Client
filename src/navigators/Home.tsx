import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home/Home';
import {Settings} from '../screens/settings/Settings';
import {FilingStationSearch} from '../screens/fillingStations/FilingStationSearch';
import {Profile} from '../screens/profile/Profile';
import {FillingStation} from '../screens/fillingStation/FillingStation';

export type HomeStackParamList = {
  Home: undefined;
  Settings: undefined;
  FilingStationSearch: undefined;
  FilingStation: {
    id: string;
  };
  Profile: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Settings" component={Settings} />
    <HomeStack.Screen
      name="FilingStationSearch"
      component={FilingStationSearch}
    />
    <HomeStack.Screen name="FilingStation" component={FillingStation} />
    <HomeStack.Screen name="Profile" component={Profile} />
  </HomeStack.Navigator>
);
