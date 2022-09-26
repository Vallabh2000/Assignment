import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import store from '../../store/store';

import Auth from './Auth';
import Main from './Main';

const data = store.getState();

const isAuth = data.users.isAuth;

console.log(data.users.isAuth, 'App');

const Stack = (loggedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {Main, Auth},
      {initialRouteName: loggedIn ? 'Main' : 'Auth'},
    ),
  );

export default Stack;
