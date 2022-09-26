import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
// import {VectorIcon} from '../assets/vectoreicon';
// import Header from '../Screens/Header';
// import HeaderPocket from '../Screens/HeaderPocket';
// import HeaderSetting from '../Screens/HeaderSetting';
import HomePage from '../Screens/HomePage';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

export default createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {},
    },
    Signup: {
      screen: SignUp,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'Login',
    // defaultNavigationOptions: {
    //   headerShown:,
    //   header:,
    //   title:,
    //   he
    // },
  },
);
