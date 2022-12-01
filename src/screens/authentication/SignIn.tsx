import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Colors} from '../../Colors';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {Pressable} from '../../components/Pressable';
import {Font} from '../../Fonts';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {useAuthentication} from '../../context/Auth';

type NavigationProps = NavigationProp<AuthenticationStackParamList, 'SignIn'>;

interface FormProps {
  phoneNumber: string;
}

export const SignIn = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {signInWithPhoneNumber} = useAuthentication();

  const validationSchema = yup.object({
    phoneNumber: yup.string().trim().required(),
  });

  const initialValues = {
    phoneNumber: '',
  };

  const {
    values,
    errors,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (form: FormProps) => {
      await signInWithPhoneNumber(form.phoneNumber);
      navigate('Verification', {
        email: form.phoneNumber,
      });
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          firstTitle={'Welcome to'}
          mainTitle={'Fuel Q'}
          subTitle={'Please enter data to login'}
          margin
        />
        <View style={styles.inputContainer}>
          <TextInput
            label={'Phone No'}
            keyboardType={'number-pad'}
            placeholder={'07XXXXXX'}
            textContentType={'telephoneNumber'}
            value={values.phoneNumber}
            isError={!!errors.phoneNumber}
            errorMessage={errors.phoneNumber ? errors.phoneNumber : ''}
            onChangeText={handleChange('phoneNumber')}
            onBlur={handleBlur('phoneNumber')}
            touched={touched.phoneNumber}
            block
          />
        </View>
        <View style={styles.button}>
          <Block disabled={isValid} onPress={handleSubmit}>
            Sign In
          </Block>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {
            navigate('ForgotPassword', {
              email: values.email,
            });
          }}
          style={styles.buttonLeft}>
          <Text style={[styles.buttonBottomText, styles.buttonLeftText]}>
            Forgot Password
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigate('SignUp');
          }}
          style={styles.buttonRight}>
          <Text style={[styles.buttonBottomText, styles.buttonRightText]}>
            Sign Up
          </Text>
        </Pressable>
      </View>
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
  inputContainer: {marginTop: '20%'},
  button: {marginTop: '20%'},
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {paddingLeft: 24},
  buttonRight: {
    paddingRight: 24,
  },
  buttonBottomText: {
    fontFamily: Font.Medium,
  },
  buttonLeftText: {
    color: Colors.Primary.Navy,
  },
  buttonRightText: {
    color: Colors.Primary.Blue,
  },
});
