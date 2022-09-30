import {createStackNavigator} from 'react-navigation-stack';
import PendingEvents from '../Screens/PendingEvents';
import PlannedEvents from '../Screens/PlannedEvents';
import PlannerScreen from '../Screens/PlannerScreen';

export default createStackNavigator(
  {
    PlannerScreen: {
      screen: PlannerScreen,
      // navigationOptions:{},
    },
    PlannedEvents: {
      screen: PlannedEvents,
      // navigationOptions:{},
    },
    PendingEvents: {
      screen: PendingEvents,
      // navigationOptions: {},
    },
  },
  {
    initialRouteName: 'PlannerScreen',
    //   tabBarComponent: TopBarBtn,
    // tabBarOptions: {tabStyle: {backgroundColor: 'yellow'}},
  },
);
