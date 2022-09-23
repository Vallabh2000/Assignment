import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Auth from './Auth';
import Main from './Main';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
