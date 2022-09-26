import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {addUsers} from '../../store/userSlice';
import {Button as IconButton, CheckBox} from '@rneui/themed';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Field, Formik} from 'formik';
import DatePicker from 'react-native-date-picker';
import moment, {max} from 'moment';
import CustomInput from '../../Components/CustomInput';
import {VectorIcon} from '../assets/vectoreicon';

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().max(25, '').required('First name is required'),
  lastName: yup.string().max(25, '').required('Last name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  phoneNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  gender: yup.string().required('Gender is required'),
  date: yup.date().required('Date is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      passShow: true,
      cPassShow: true,
    };
  }
  render() {
    console.log(this.props.userData);
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
            validationSchema={signUpValidationSchema}
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
            onSubmit={(values, {resetForm}) => {
              this.props.setUser(values);
              resetForm({values: ''});
            }}>
            {({
              handleSubmit,
              isValid,
              handleChange,
              values,
              setFieldValue,
              dirty,
            }) => (
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
                  name="gender"
                  placeholder="Gender"
                  value={values.gender}
                  editable={false}
                />
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <CheckBox
                    center
                    title="Male"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() => {
                      setFieldValue('gender', 'Male');
                    }}
                    checked={values.gender == 'Male'}
                  />
                  <CheckBox
                    center
                    title="Female"
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    onPress={() => {
                      setFieldValue('gender', 'Female');
                    }}
                    checked={values.gender == 'Female'}
                  />
                </View>
                <TextInput
                  name="date"
                  onPressIn={() => this.setState({show: true})}
                  style={styles.input}
                  value={values.date.toString()}
                  placeholder="dob"
                  editable={false}
                />
                <DatePicker
                  modal
                  open={this.state.show}
                  date={new Date()}
                  mode="date"
                  onConfirm={date => {
                    let newDate = moment(date).format('DD-MM-YYYY');
                    this.setState({show: false});
                    setFieldValue('date', newDate);
                  }}
                  onCancel={() => {
                    this.setState({show: false});
                  }}
                />
                <View style={styles.input}>
                  <TextInput
                    name="password"
                    value={values.password}
                    onChangeText={text => setFieldValue('password', text)}
                    placeholder="Password"
                    secureTextEntry={this.state.passShow}
                  />

                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        ...this.state,
                        passShow: !this.state.passShow,
                      })
                    }>
                    {this.state.passShow ? (
                      <VectorIcon
                        size={20}
                        type="Ionicons"
                        name="eye-outline"
                        color={'#000'}
                        style={{}}
                      />
                    ) : (
                      <VectorIcon
                        size={20}
                        type="Ionicons"
                        name="eye-off-outline"
                        color={'#000'}
                        style={{}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.input}>
                  <TextInput
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChangeText={text =>
                      setFieldValue('confirmPassword', text)
                    }
                    placeholder="Confirm Password"
                    secureTextEntry={this.state.cPassShow}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        ...this.state,
                        cPassShow: !this.state.cPassShow,
                      })
                    }>
                    {this.state.cPassShow ? (
                      <VectorIcon
                        size={20}
                        type="Ionicons"
                        name="eye-outline"
                        color={'#000'}
                        style={{}}
                      />
                    ) : (
                      <VectorIcon
                        size={20}
                        type="Ionicons"
                        name="eye-off-outline"
                        color={'#000'}
                        style={{}}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <Button
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                  title="SIGN UP"
                />
              </>
            )}
          </Formik>

          <View
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
            }}>
            <Text onPress={() => navigation.navigate('Login')}>
              Create Account
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: payload => dispatch(addUsers(payload)),
  };
};

const mapStateToProps = (state, props) => {
  return {
    userData: state.users,
    // console.log(state)
  };
};

console.log(mapStateToProps);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// export default function SignUp({navigation}) {

//   return (
//     <>
//       <View
//         style={{
//           flex: 1,
//           height: '100%',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginVertical: 100,
//         }}>
//         <Text>Sign Up Here</Text>

//         <Formik
//           // validationSchema={signUpValidationSchema}
//           initialValues={{
//             firstName: '',
//             lastName: '',
//             email: '',
//             phoneNumber: '',
//             gender: '',
//             date: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           onSubmit={values => console.log(values)}>
//           {({handleSubmit, isValid, handleChange, values, setFieldValue}) => (
//             <>
//               <Field
//                 component={CustomInput}
//                 name="firstName"
//                 placeholder="First Name"
//               />
//               <Field
//                 component={CustomInput}
//                 name="lastName"
//                 placeholder="Last Name"
//               />
//               <Field
//                 component={CustomInput}
//                 name="email"
//                 placeholder="Email Address"
//                 keyboardType="email-address"
//               />
//               <Field
//                 component={CustomInput}
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 keyboardType="numeric"
//               />
//               {/* <TextInput
//                 style={styles.input}
//                 value={values.gender}
//                 editable={false}
//                 placeholder="Gender"
//               /> */}
//               <View style={{display: 'flex', flexDirection: 'row'}}>
//                 <CheckBox
//                   center
//                   title="Male"
//                   checkedIcon="dot-circle-o"
//                   uncheckedIcon="circle-o"
//                   onPress={() => {
//                     setFieldValue('gender', 'Male');
//                     // console.log(values.gender);
//                   }}
//                   checked={values.gender == 'Male'}
//                   // onPress={() => setCheck2(!check2)}
//                 />
//                 <CheckBox
//                   center
//                   title="Female"
//                   checkedIcon="dot-circle-o"
//                   uncheckedIcon="circle-o"
//                   onPress={() => {
//                     setFieldValue('gender', 'Female');
//                     // console.log(values.gender);
//                   }}
//                   checked={values.gender == 'Female'}
//                   // onPress={() => setCheck2(!check2)}
//                 />
//               </View>
//               {/* <TouchableOpacity onPress={() => setOpen(true)}> */}
//               <TextInput
//                 onPressIn={() => setOpen(true)}
//                 style={styles.input}
//                 value={values.date.toString()}
//                 placeholder="dob"
//                 editable={false}
//               />
//               {/* </TouchableOpacity> */}
//               {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
//               <DatePicker
//                 modal
//                 open={open}
//                 date={new Date()}
//                 mode="date"
//                 onConfirm={date => {
//                   let newDate = moment(date).format('DD-MM-YYYY');
//                   setOpen(false);
//                   setFieldValue('date', newDate);
//                   // console.log(values.date, 'date');
//                 }}
//                 onCancel={() => {
//                   setOpen(false);
//                 }}
//               />

//               <Field
//                 component={CustomInput}
//                 name="password"
//                 placeholder="Password"
//                 secureTextEntry
//               />
//               <Field
//                 component={CustomInput}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 secureTextEntry
//               />
//               <Button onPress={handleSubmit} title="SIGN UP" />
//             </>
//           )}
//         </Formik>

//         <View
//           style={{
//             display: 'flex',
//             justifyContent: 'space-around',
//             flexDirection: 'column',
//           }}>
//           <Text onPress={() => navigation.navigate('Login')}>
//             Create Acshow
//           </Text>
//         </View>
//       </View>
//     </>
//   );
// }

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
