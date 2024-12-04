import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Colors} from '../../Colors';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {Picker} from '../../components/Picker';
import {KeyboardAwareScrollView} from '../../components/KeyboardAwareScrollView';

import {District} from '../../../assets/data/District';
import {useOnboarding} from '../../context/Onboarding';

type NavigationProps = NavigationProp<
  AuthenticationStackParamList,
  'AccountDetails'
>;

interface FormProps {
  firstName: string;
  lastName: string;
  nic: string;
  district: string;
}

const validationSchema = yup.object({
  firstName: yup.string().trim().required(),
  lastName: yup.string(),
  nic: yup.string().trim().required(),
  district: yup.string(),
});

const initialValues = {
  firstName: '',
  lastName: '',
  nic: '',
  district: '',
};

export const AccountDetails = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {createUser} = useOnboarding();

  const {
    values,
    errors,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setSubmitting,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: _values => submitAccountDetails(_values),
    validateOnBlur: true,
    validateOnChange: false,
  });

  const submitAccountDetails = async (form: FormProps) => {
    setSubmitting(true);
    const _user: Partial<User> = {
      ...form,
      onboarding: 'AD',
    };
    await createUser(_user);
    navigate('VehicleDetails');
    setSubmitting(false);
  };

  return (
    <View style={styles.root}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          mainTitle={'Personal Details'}
          subTitle={'Complete the following data to easy out experience'}
          margin
        />
        <View style={styles.inputContainer}>
          <TextInput
            label={'First Name'}
            placeholder={'Dave'}
            textContentType={'name'}
            value={values.firstName}
            isError={!!errors.firstName}
            errorMessage={errors.firstName ? errors.firstName : ''}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            touched={touched.firstName}
            block
          />

          <TextInput
            label={'Last Name'}
            placeholder={'Copperfield'}
            textContentType={'familyName'}
            value={values.lastName}
            isError={!!errors.lastName}
            errorMessage={errors.lastName ? errors.lastName : ''}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            touched={touched.lastName}
            block
          />

          <TextInput
            label={'NIC'}
            placeholder={'94205333V'}
            value={values.nic}
            isError={!!errors.nic}
            errorMessage={errors.nic ? errors.nic : ''}
            onChangeText={handleChange('nic')}
            onBlur={handleBlur('nic')}
            touched={touched.nic}
            block
          />

          <Picker
            label={'District'}
            selectedValue={values.district ?? ''}
            isOptional={true}
            values={District.map(_c => ({label: _c, value: _c}))}
            onSelect={_district => setFieldValue('district', _district)}
            placeholderText={'Select'}
          />
        </View>
        <View style={styles.button}>
          <Block
            isSubmitting={isSubmitting}
            onPress={handleSubmit}
            disabled={isValid}>
            Continue
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
  inputContainer: {marginTop: '10%'},
  button: {marginTop: '10%'},
});
