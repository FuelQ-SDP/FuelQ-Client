import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../screens/authentication/SignIn';
import {SignUp} from '../screens/authentication/SignUp';
import {Verification} from '../screens/authentication/Verification';
import {AccountDetails} from '../screens/authentication/AccountDetails';
import {AddressDetails} from '../screens/authentication/AddressDetails';
import {ForgotPassword} from '../screens/authentication/ForgotPassword';

export type AuthenticationStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Verification: {email?: string};
  AccountDetails: undefined;
  AddressDetails: undefined;
  ForgotPassword: {email?: string};
};

const AuthenticationStack =
  createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
    <AuthenticationStack.Screen name="SignIn" component={SignIn} />
    <AuthenticationStack.Screen name="SignUp" component={SignUp} />
    <AuthenticationStack.Screen name="Verification" component={Verification} />
    <AuthenticationStack.Screen
      name="AccountDetails"
      component={AccountDetails}
    />
    <AuthenticationStack.Screen
      name="AddressDetails"
      component={AddressDetails}
    />
    <AuthenticationStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
    />
  </AuthenticationStack.Navigator>
);
