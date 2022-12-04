import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Colors} from '../../Colors';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {useAuthentication} from '../../context/Auth';
import {KeyboardAwareScrollView} from '../../components/KeyboardAwareScrollView';

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
    isSubmitting,
    setFieldError,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (form: FormProps) => {
      setSubmitting(true);
      signInWithPhoneNumber(form.phoneNumber)
        .then(() => {
          setSubmitting(false);
          navigate('Verification', {
            email: form.phoneNumber,
          });
        })
        .catch(e => {
          setSubmitting(false);
          setFieldError('phoneNumber', e);
        });
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
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
          <Block
            isSubmitting={isSubmitting}
            disabled={isValid}
            onPress={handleSubmit}>
            Sign In
          </Block>
        </View>
      </KeyboardAwareScrollView>
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
});
