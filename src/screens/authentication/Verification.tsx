import React, {useCallback, useState} from 'react';
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
import {ComponentStyles} from '../../components/Styles';
import {Text} from '../../components/Text';

type NavigationProps = NavigationProp<
  AuthenticationStackParamList,
  'Verification'
>;

type RouteProps = RouteProp<AuthenticationStackParamList, 'Verification'>;

export const Verification = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {
    params: {phoneNo},
  } = useRoute<RouteProps>();
  const {confirmCode, resendConfirmationCode} = useAuthentication();

  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const onPressSubmit = useCallback(() => {
    confirmCode(code)
      .then((_user: User) => {
        console.log('_user : ', _user);
        if (_user.onboarding === 'AD') {
          navigate('VehicleDetails', {
            user: _user,
          });
        } else {
          navigate('AccountDetails', {
            user: _user,
          });
        }
      })
      .catch(e => {
        setError(e);
      });
  }, [code, confirmCode, navigate]);

  const resendCode = useCallback(() => {
    resendConfirmationCode(phoneNo);
  }, [phoneNo, resendConfirmationCode]);

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          mainTitle="Verification"
          subTitle={`We have sent the verification code  ${phoneNo}`}
          margin
        />
        <View style={styles.inputContainer}>
          <OTPInput
            code={code}
            onCodeChanged={_code => {
              setCode(_code);
            }}
            onRequestResend={resendCode}
          />
        </View>
        <Text style={ComponentStyles.inputError}>{error}</Text>
        <View style={styles.button}>
          <Block onPress={onPressSubmit}>Continue</Block>
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
