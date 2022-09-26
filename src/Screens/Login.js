import {Formik} from 'formik';
import React, {Component, useLayoutEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {VectorIcon} from '../assets/vectoreicon';
import NavHeader from './Header';
import {connect, useDispatch, useSelector} from 'react-redux';
import {element} from 'prop-types';
import {authentication} from '../../store/userSlice';

class Login extends NavHeader {
  constructor(props) {
    super(props);
    this.state = {passShow: true, isAuth: false};
    // console.log(this.state.isAuth, '123');
    props.navigation.setParams({
      title: 'Login Page',
      imgProps: {source: require('../assets/image.jpeg')},
      headerBackProps: {
        color: 'lightgray',
      },
    });
  }

  // static navigationOptions = () => {
  //   return {
  //     headerLeft: () => (
  //       <>
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             marginStart: 10,
  //             marginBottom: 20,
  //           }}>
  //           <Image
  //             source={require('../assets/image.jpeg')}
  //             style={{width: 50, height: 50, borderRadius: 100, marginEnd: 5}}
  //           />
  //           <View>
  //             <Text style={{fontSize: 18}}>Start a new project</Text>
  //             <Text style={{fontSize: 12}}>view more details</Text>
  //           </View>
  //         </View>
  //       </>
  //     ),
  //     headerRight: ({navigation}) => (
  //       <>
  //         <View
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             marginEnd: 10,
  //             marginBottom: 20,
  //           }}>
  //           <VectorIcon
  //             size={20}
  //             type="Ionicons"
  //             name="notifications-outline"
  //             color={'#000'}
  //             style={{marginEnd: 10}}
  //           />
  //           <TouchableOpacity onPress={() => navigation.navigate('Home')}>
  //             <VectorIcon
  //               size={20}
  //               type="Ionicons"
  //               name="menu-outline"
  //               color={'#000'}
  //               style={{}}
  //             />
  //           </TouchableOpacity>
  //         </View>
  //       </>
  //     ),
  //     headerStyle: {},
  //     headerStatusBarHeight: 70,
  //     title: false,
  //   };
  // };
  render() {
    const {navigation} = this.props;
    // const {isAuth} = this.state.isAuth;
    // console.log({isAuth}, '123');
    const {userData} = this.props;
    function onLogin(loginValues) {
      const isUser = userData.usersArray.find(
        ele =>
          ele.email === loginValues?.emailId &&
          ele.password === loginValues?.password,
      );
      // console.log(isUser);
      if (isUser) {
        // this.props.setUser(true);
        // this.setState({isAuth: true});
        // console.log('true');
        // navigation.navigate('Home');
      } else {
        // console.log('error');
      }
    }
    console.log(this.props.userData.isAuth);

    console.tron.log(userData);

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Login Here</Text>
        <Formik
          initialValues={{emailId: '', password: ''}}
          onSubmit={(values, {resetForm}) => {
            // console.log(values, 'og');
            onLogin(values);
            this.props.setUser(true);
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
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                height: 200,
                marginVertical: 30,
              }}>
              <Text>E-mail id</Text>
              <TextInput
                name="emailId"
                value={values.emailId}
                onChangeText={handleChange('emailId')}
                // textContentType="emailAddress"
                placeholder="Enter Email"
                style={styles.input}
              />
              <Text>Password</Text>
              <View style={styles.input}>
                <TextInput
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  // textContentType="password"
                  placeholder="Password"
                  secureTextEntry={this.state.passShow}
                />
                <TouchableOpacity
                  onPress={() =>
                    // this.setState(this.state({passShow: false}));
                    this.setState({
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
              <View style={{alignSelf: 'center'}}>
                <Button
                  title="Login"
                  onPress={
                    handleSubmit
                    // navigation.setParams({
                    //   backProps: {
                    //     containerStyle: {},
                    //   },
                    // });
                    // navigation.navigate('Home');
                  }
                />
              </View>
            </View>
          )}
        </Formik>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 90,
          }}>
          <Text style={{marginTop: 30, marginBottom: 5}}>Sign Up Here</Text>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: payload => {
      dispatch(authentication(payload));
      // console.log(payload);
    },
  };
};

export const mapStateToProps = (state, props) => {
  return {
    userData: state.users,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
