import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import store from '../../store/store';

import Auth from './Auth';
import Main from './Main';

const Stack = loggedIn =>
  createAppContainer(
    createSwitchNavigator(
      {Main, Auth},
      {initialRouteName: loggedIn ? 'Main' : 'Auth'},
    ),
  );

export default Stack;
