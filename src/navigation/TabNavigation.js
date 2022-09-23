import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Login from '../Screens/Login';
import Tabbar from '../Screens/TabbarPage';

export default createAppContainer(
  createSwitchNavigator({
    // Tab,
  }),
);
