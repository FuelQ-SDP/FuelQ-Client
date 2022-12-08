import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Colors} from '../../Colors';
import {TextInput} from '../../components/TextInput';
import {Block} from '../../components/Button/Block';
import {Picker} from '../../components/Picker';
import {Styles} from '../../Styles';
import {VehicleService} from '../../services/VehicleService';
import {KeyboardAwareScrollView} from '../../components/KeyboardAwareScrollView';
import {VehicleType as VehicleTypeEnum} from '../../types/appEnums';
import {HomeStackParamList} from '../../navigators/Home';
import {useVehicle} from '../../context/Vehicle';
import {Header} from '../../components/Header';
import {ArrowLeft} from '../../icons/ArrowLeft';

type NavigationProps = NavigationProp<HomeStackParamList, 'CreateVehicle'>;

interface FormProps {
  registrationNumber: string;
  vehicleType: string;
  fuelType: string;
}

const FuelType = ['Petrol', 'Diesel'];
const VehicleType = [
  VehicleTypeEnum.Car,
  VehicleTypeEnum.DualPurpose,
  VehicleTypeEnum.MotorCycle,
  VehicleTypeEnum.ThreeWheeler,
  VehicleTypeEnum.Commercial,
  VehicleTypeEnum.ForkLift,
  VehicleTypeEnum.LandVehicle,
  VehicleTypeEnum.MotorLory,
  VehicleTypeEnum.LoryTrailer,
  VehicleTypeEnum.PrimeMover,
  VehicleTypeEnum.Other,
];

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

export const CreateVehicle = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {onCreate} = useVehicle();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setTouched,
    setSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (form: FormProps) => {
      const _v: Partial<Vehicle> = {
        vehicleNo: form.registrationNumber,
        fuelType: form.fuelType,
        vehicleType: form.vehicleType,
        id: '',
      };
      setSubmitting(true);
      onCreate(_v);
      goBack();
      setSubmitting(false);
    },
    validateOnBlur: true,
    validateOnChange: false,
  });

  return (
    <View style={styles.root}>
      <Header
        title={'Add Vehicle'}
        leftIcon={<ArrowLeft />}
        onPressLeft={() => goBack()}
        backgroundColor="white"
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            label={'Registration Number'}
            placeholder={'GG 9090'}
            value={values.registrationNumber}
            isError={!!errors.registrationNumber}
            errorMessage={
              errors.registrationNumber ? errors.registrationNumber : ''
            }
            onChangeText={handleChange('registrationNumber')}
            onBlur={async () => {
              setTouched({...touched, ['registrationNumber']: true});
              if (values.registrationNumber !== '') {
                const isValidVNO = await VehicleService.validateNo(
                  values.registrationNumber,
                );
                if (!isValidVNO) {
                  setFieldError(
                    'registrationNumber',
                    'This registration number is already exists.',
                  );
                }
              }
            }}
            touched={touched.registrationNumber}
            block
          />
          <Picker
            label={'Vehicle Type'}
            selectedValue={values.vehicleType ?? ''}
            isOptional={true}
            values={VehicleType.map(_c => ({label: _c, value: _c}))}
            onSelect={type => setFieldValue('vehicleType', type)}
            onBlur={handleBlur('vehicleType')}
            onClose={() => {
              setTimeout(
                () => setTouched({...touched, ['vehicleType']: true}),
                100,
              );
            }}
            isError={!!errors.vehicleType}
            errorMessage={errors.vehicleType ? errors.vehicleType : ''}
            touched={touched.vehicleType}
            placeholderText={'Select'}
          />

          <Picker
            label={'Fuel Type'}
            selectedValue={values.fuelType ?? ''}
            isOptional={true}
            values={FuelType.map(_c => ({label: _c, value: _c}))}
            onSelect={type => setFieldValue('fuelType', type)}
            onClose={() => {
              setTimeout(
                () => setTouched({...touched, ['fuelType']: true}),
                100,
              );
            }}
            isError={!!errors.fuelType}
            errorMessage={errors.fuelType ? errors.fuelType : ''}
            touched={touched.fuelType}
            placeholderText={'Select'}
          />
        </View>

        <View style={styles.button}>
          <Block onPress={handleSubmit}>Add</Block>
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
  vehicleRow: {
    ...Styles.shadowCenter,
    marginVertical: 10,
    backgroundColor: Colors.Secondary.GreySoft,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  vehicleContainer: {
    flexDirection: 'row-reverse',
  },
});
