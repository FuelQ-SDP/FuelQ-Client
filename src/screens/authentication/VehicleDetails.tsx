import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';

import {AuthenticationStackParamList} from '../../navigators/Authentication';
import {Colors} from '../../Colors';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {AuthenticationHeader} from './component/AuthenticationHeader';
import {Picker} from '../../components/Picker';
import {Checkbox} from '../../components/Checkbox';
import {Styles} from '../../Styles';
import {FontSize, Text} from '../../components/Text';
import {ThreeWheeler} from '../../icons/Vehicles/ThreeWheeler';
import {DualPurpose} from '../../icons/Vehicles/DualPurpose';
import {Pressable} from '../../components/Button/Pressable';

type NavigationProps = NavigationProp<
  AuthenticationStackParamList,
  'VehicleDetails'
>;

interface FormProps {
  registrationNumber: string;
  vehicleType: string;
  fuelType: string;
}

const FuelType = ['Petrol', 'Diesel'];
const VehicleType = [
  'Car',
  'Dual Purpose',
  'Motor Cycle',
  'Three Wheeler',
  'Commercial',
  'Fork Lift',
  'Land Vehicle',
  'Motor Lory',
  'Lory Trailer',
  'Prime Mover',
  'Other',
];

export const VehicleDetails = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const [vehicles, setVehicles] = useState<FormProps[]>([]);

  const validationSchema = yup.object({
    registrationNumber: yup.string().trim().required(),
    vehicleType: yup.string().trim().required(),
    fuelType: yup.string().trim().required(),
  });

  const initialValues = {
    registrationNumber: '',
    vehicleType: '',
    fuelType: '',
  };

  const {
    values,
    errors,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (form: FormProps) => {
      setVehicles([...vehicles, form]);
      resetForm();
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthenticationHeader
          mainTitle={'Vehicle'}
          subTitle={'Complete the following data to easy out experience'}
          margin
        />
        <View style={styles.inputContainer}>
          {vehicles && (
            <View
              style={{
                marginBottom: 20,
              }}>
              {vehicles.map(v => {
                return (
                  <View style={styles.vehicleRow}>
                    <Text fontSize={FontSize.H1}>{v.registrationNumber}</Text>
                    <ThreeWheeler size={40} color={Colors.Primary.Blue} />
                  </View>
                );
              })}
            </View>
          )}
          <TextInput
            label={'Registration Number'}
            placeholder={'GG-9090'}
            value={values.registrationNumber}
            isError={!!errors.registrationNumber}
            errorMessage={
              errors.registrationNumber ? errors.registrationNumber : ''
            }
            onChangeText={handleChange('registrationNumber')}
            onBlur={handleBlur('registrationNumber')}
            touched={touched.registrationNumber}
            block
          />
          <Picker
            label={'Vehicle Type'}
            selectedValue={values.vehicleType ?? ''}
            isOptional={true}
            values={VehicleType.map(_c => ({label: _c, value: _c}))}
            onSelect={type => setFieldValue('vehicleType', type)}
            placeholderText={'Select'}
          />

          <Picker
            label={'Fuel Type'}
            selectedValue={values.fuelType ?? ''}
            isOptional={true}
            values={FuelType.map(_c => ({label: _c, value: _c}))}
            onSelect={type => setFieldValue('fuelType', type)}
            placeholderText={'Select'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
          }}>
          <Pressable disabled={!isValid} onPress={handleSubmit}>
            <Text>Add Another Vehicle</Text>
          </Pressable>
        </View>

        <View style={styles.button}>
          <Block onPress={() => {}}>Continue</Block>
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

  subtitle: {
    marginTop: '5%',
  },
  inputContainer: {marginTop: '10%'},
  button: {marginTop: '10%'},
  vehicleRow: {
    ...Styles.shadowCenter,
    marginVertical: 10,
    backgroundColor: Colors.Label.OffBlue,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
