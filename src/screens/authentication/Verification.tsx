import React, {useState} from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Colors} from '../../Colors';
import {Block} from '../../components/Button/Block';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {OTPInput} from '../../components/OTPInput';
import {useAuthentication} from '../../context/Auth';

type NavigationProps = NavigationProp<
  AuthenticationStackParamList,
  'Verification'
>;

type RouteProps = RouteProp<AuthenticationStackParamList, 'Verification'>;

export const Verification = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();
  const {confirmCode} = useAuthentication();
  const {
    params: {email},
  } = useRoute<RouteProps>();
  const [code, setCode] = useState('');

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          mainTitle="Verification"
          subTitle={`We have sent the verification code  ${email}`}
          margin
        />
        <View style={styles.inputContainer}>
          <OTPInput
            code={code}
            onCodeChanged={_code => {
              setCode(_code);
            }}
            onRequestResend={() => {}}
          />
        </View>
        <View style={styles.button}>
          <Block
            onPress={() => {
              confirmCode(code);
            }}>
            Continue
          </Block>
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
  container: {
    padding: 24,
  },
  inputContainer: {marginTop: '20%', flexDirection: 'row', flex: 1},
  button: {marginTop: '20%'},
});
