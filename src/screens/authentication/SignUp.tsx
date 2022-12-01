import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Header} from '../../components/Header';
import {Colors} from '../../Colors';
import {Text} from '../../components/Text';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {Pressable} from '../../components/Pressable';
import {Font} from '../../Fonts';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {ArrowLeft} from '../../icons/ArrowLeft';

type NavigationProps = NavigationProp<AuthenticationStackParamList, 'SignUp'>;

interface FormProps {
  email: string;
}

export const SignUp = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();

  const validationSchema = yup.object({
    email: yup.string().email().trim().required(),
  });

  const initialValues = {
    email: '',
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
    onSubmit: (form: FormProps) => {},
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <View style={styles.root}>
      <Header
        title={''}
        leftIcon={<ArrowLeft size={24} />}
        onPressLeft={() => goBack()}
        backgroundColor={'transparent'}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          firstTitle="Join to"
          mainTitle="Fuel Q"
          subTitle="Please email to Sign Up"
        />
        <View style={styles.inputContainer}>
          <TextInput
            label={'Email'}
            keyboardType={'email-address'}
            placeholder={'email'}
            textContentType={'emailAddress'}
            value={values.email}
            isError={!!errors.email}
            errorMessage={errors.email ? errors.email : ''}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            touched={touched.email}
            block
          />
        </View>
        <View style={styles.button}>
          <Block
            disabled={isValid}
            onPress={() => {
              handleSubmit();
              navigate('Verification', {
                email: values.email,
              });
            }}>
            Continue
          </Block>
        </View>

        <Pressable onPress={() => goBack()} style={styles.bottomButton}>
          <Text style={[styles.buttonBottomText, styles.buttonLeftText]}>
            Have an Account?{' '}
            <Text style={[styles.buttonBottomText, styles.buttonRightText]}>
              Sign In
            </Text>
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
  container: {
    padding: 24,
  },
  inputContainer: {marginTop: '20%'},
  button: {marginTop: '20%'},
  bottomButton: {
    alignSelf: 'center',
    marginTop: '10%',
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
