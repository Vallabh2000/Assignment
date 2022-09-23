import React, {Component} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {VectorIcon} from '../assets/vectoreicon';
import NavHeader from './Header';

class HomePage extends NavHeader {
  constructor(props) {
    super(props);
    console.log(props);
    props.navigation.setParams({
      title: 'Home Screen',
      backProps: {
        // buttonStyle: {backgroundColor: 'yellow'},
        onPress: () => props.navigation.goBack(),
      },
      notiBtnProps: {
        type: 'Ionicons',
        name: 'notifications-outline',
      },
      menuBtnProps: {
        type: 'Ionicons',
        name: 'menu-outline',
        onPress: () => props.navigation.navigate('Signup'),
      },
      // imgProps: {source: require('../assets/image.jpeg')},
      headerBackProps: {
        color: 'lightgray',
      },
    });
  }
  // static navigationOptions = ({navigation}) => {
  //   console.log(navigation);
  //   return {
  //     headerTitle: () => (
  //       <Text style={{marginBottom: 20, fontSize: 18}}>Home</Text>
  //     ),
  //     headerLeft: () => (
  //       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
  //         <VectorIcon
  //           size={20}
  //           type="Ionicons"
  //           name="ios-chevron-back"
  //           color={'#000'}
  //           style={{marginBottom: 20, marginStart: 10}}
  //         />
  //       </TouchableOpacity>
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

  //           <VectorIcon
  //             size={20}
  //             type="Ionicons"
  //             name="menu-outline"
  //             color={'#000'}
  //             style={{}}
  //           />
  //         </View>
  //       </>
  //     ),
  //     headerStyle: {backgroundColor: 'white'},
  //     headerStatusBarHeight: 70,
  //     title: false,
  //   };
  // };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello</Text>
      </SafeAreaView>
    );
  }
}
export default HomePage;
