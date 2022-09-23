import {Button as IconButton} from '@rneui/themed';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityComponent,
  useColorScheme,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Field, Formik} from 'formik';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import React from 'react';
import CustomInput from '../Components/CustomInput';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const signUpValidationSchema = yup.object().shape({
//   firstName: yup
//     .string()
//     .matches(/^[a-z ,.'-]+$/i, 'Enter at least 2 names')
//     .required('First name is required'),
//   lastName: yup
//     .string()
//     .matches(/^[a-z ,.'-]+$/i, 'Enter at least 2 names')
//     .required('Last name is required'),
//   email: yup
//     .string()
//     .email('Please enter valid email')
//     .required('Email is required'),
//   phoneNumber: yup
//     .string()
//     .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
//     .required('Phone number is required'),
//   gender: yup
//     .string()
//     .matches(/^[a-z ,.'-]+$/i, 'Enter at least 2 names')
//     .required('Gender is required'),
//   date: yup
//     .string()
//     // .matches(/^[a-z ,.'-]+$/i, 'Enter at least 2 names')
//     .required('Date is required'),
//   password: yup
//     .string()
//     .min(8, ({min}) => `Password must be at least ${min} characters`)
//     .required('Password is required'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password')], 'Passwords do not match')
//     .required('Confirm password is required'),
// });

export default function SignUp({navigation}) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <View
        style={{
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 100,
        }}>
        <Text>Sign Up Here</Text>

        <Formik
          // validationSchema={signUpValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: '',
            date: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => console.log(values)}>
          {({handleSubmit, isValid, handleChange, values, setFieldValue}) => (
            <>
              <Field
                component={CustomInput}
                name="firstName"
                placeholder="First Name"
              />
              <Field
                component={CustomInput}
                name="lastName"
                placeholder="Last Name"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                value={values.gender}
                editable={false}
                placeholder="Gender"
              />
              <View>
                <IconButton
                  onPress={() => {
                    setFieldValue('gender', 'Male');
                    // console.log(values.gender);
                  }}
                  title="Male"
                  icon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
                  iconRight
                  iconContainerStyle={{marginLeft: 10}}
                  titleStyle={{fontWeight: '500'}}
                  buttonStyle={{
                    backgroundColor: 'rgba(199, 43, 98, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginBottom: 5,
                  }}
                />
                <IconButton
                  onPress={() => {
                    setFieldValue('gender', 'Female');
                    // console.log(values.gender);
                  }}
                  title="Female"
                  icon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                  }}
                  iconRight
                  iconContainerStyle={{marginLeft: 10}}
                  titleStyle={{fontWeight: '500'}}
                  buttonStyle={{
                    backgroundColor: 'rgba(199, 43, 98, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                  }}
                />
              </View>
              <TextInput
                style={styles.input}
                value={values.date.toString()}
                editable={false}
                placeholder="dob"
              />
              <Button title="Open" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={new Date()}
                mode="date"
                onConfirm={date => {
                  let newDate = moment(date).format('DD-MM-YYYY');
                  setOpen(false);
                  setFieldValue('date', newDate);
                  // console.log(values.date, 'date');
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />

              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <Button onPress={handleSubmit} title="SIGN UP" />
            </>
          )}
        </Formik>

        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            height: 90,
          }}>
          <Text>Create Account</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
});
