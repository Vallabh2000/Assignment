// import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Drawer from '../Screens/DrawerPage';
import Tabbar from '../Screens/TabbarPage';
import Login from '../Screens/Login';
import HomePage from '../Screens/HomePage';
import SettingPage from '../Screens/SettingPage';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Auth from './Auth';
import Icon from 'react-native-vector-icons/AntDesign';
import {Animated, TouchableOpacity, View} from 'react-native';
import {Component} from 'react';
import Plan from './Planner';
import {hp} from '../responsive';
import PlannerTab from './PlannerTab';

class tabBarComponent extends Component {
  render() {
    const {
      navigation,
      renderIcon,
      onTabPress,
      onTabLongPress,
      activeTintColor,
      inactiveTintColor,
      activeBackgroundColor,
      tabBarHeight,
      tabBarBackgroundColor,
    } = this.props;

    const {routes, index: activeRouteIndex} = navigation.state;
    // console.log(routes);
    return (
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderRadius: 10,
            height: hp('7%'),
            paddingHorizontal: 20,
            marginVertical: 5,
            marginHorizontal: 20,
            backgroundColor: 'red',
          }}>
          {routes.map((route, routeIndex) => {
            const isRouteActive = routeIndex === activeRouteIndex;
            const tintColor = isRouteActive
              ? activeTintColor || 'blue'
              : inactiveTintColor || 'grey';
            return (
              <View key={routeIndex}>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: isRouteActive ? 'white' : 'transparent',
                    borderRadius: isRouteActive && 5,

                    padding: isRouteActive && 5,
                  }}
                  onPress={() => {
                    onTabPress({route});
                  }}
                  onLongPress={() => {
                    onTabLongPress({route});
                  }}>
                  <View style={{marginEnd: 5}}>
                    {renderIcon({route, focused: isRouteActive, tintColor})}
                  </View>
                  {isRouteActive && <Text>{route.routeName}</Text>}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon size={20} name="home" color={focused ? 'blue' : 'lightgray'} />
        ),
      },
    },
    SettingPage: {
      screen: SettingPage,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({focused}) => (
          <Icon
            size={20}
            name="setting"
            color={focused ? 'blue' : 'lightgray'}
          />
        ),
      },
    },
    Plan: {
      screen: PlannerTab,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            size={20}
            name="profile"
            color={focused ? 'blue' : 'lightgray'}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {title: 'Setting'},
    tabBarComponent: tabBarComponent,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'lightgray',
    },
  },
);

export default createStackNavigator(
  {
    TabStack,
  },
  {
    defaultNavigationOptions: {
      headerShown: true,
      headerTransparent: true,
    },
  },
);
