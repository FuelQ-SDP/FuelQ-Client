import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../screens/authentication/SignIn';
import {Verification} from '../screens/authentication/Verification';
import {AccountDetails} from '../screens/authentication/AccountDetails';
import {VehicleDetails} from '../screens/authentication/VehicleDetails';

export type AuthenticationStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Verification: {email?: string};
  AccountDetails: undefined;
  VehicleDetails: undefined;
};

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen name="SignIn" component={SignIn} />
    <AuthenticationStack.Screen name="Verification" component={Verification} />
    <AuthenticationStack.Screen
      name="AccountDetails"
      component={AccountDetails}
    />
    <AuthenticationStack.Screen
      name="VehicleDetails"
      component={VehicleDetails}
    />
  </AuthenticationStack.Navigator>
);
