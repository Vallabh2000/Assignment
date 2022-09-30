import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import PendingEvents from '../Screens/PendingEvents';
import PlannedEvents from '../Screens/PlannedEvents';
import PlannerScreen from '../Screens/PlannerScreen';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {getFontSize} from '../responsive';
class TopBarBtn extends Component {
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
    // console.log(navigation, 'plan');
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
            // borderRadius: 10,
            // height: 60,
            paddingHorizontal: 20,
            // marginVertical: 5,
            // marginHorizontal: 20,
            paddingTop: 15,
            backgroundColor: 'white',
          }}>
          {routes.map((route, routeIndex) => {
            // console.log(rou);
            const isRouteActive = routeIndex === activeRouteIndex;
            console.log(routeIndex, 'ee');
            const tintColor = isRouteActive
              ? activeTintColor || 'blue'
              : inactiveTintColor || 'grey';
            return (
              <View key={routeIndex}>
                <TouchableOpacity
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderTopRightRadius: 7,
                    borderTopLeftRadius: 7,
                    backgroundColor: isRouteActive
                      ? routeIndex == 0
                        ? '#930088'
                        : '#EDEDED'
                      : 'transparent',
                  }}
                  onPress={() => {
                    onTabPress({route});
                  }}
                  onLongPress={() => {
                    onTabLongPress({route});
                  }}>
                  <Text
                    style={{
                      color: isRouteActive
                        ? routeIndex == 0
                          ? '#fff'
                          : '#000'
                        : '#000',
                      fontSize: getFontSize(16),
                      fontWeight: '500',
                    }}>
                    {route.routeName}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

const planTab = createMaterialTopTabNavigator(
  {
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
    initialRouteName: 'PlannedEvents',
    tabBarComponent: TopBarBtn,
    // tabBarOptions: {tabStyle: {backgroundColor: 'yellow'}},
  },
);

const Plan = createStackNavigator(
  {
    Planner: {
      screen: PlannerScreen,
      navigationOptions: {},
    },
    planTab: {
      screen: planTab,
      navigationOptions: {},
    },
  },
  {
    initialRouteName: 'Planner',
  },
);

export default Plan;
