import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import PlannedEvents from './PlannedEvents';
import PendingEvents from './PendingEvents';
import {Button} from 'react-native-elements';
import {hp, SCREENWIDTH, wp} from '../responsive';
import {HeaderBackButton, HeaderTitle} from 'react-navigation-stack';

const screens = {
  first: PlannedEvents,
  second: PendingEvents,
};

export default class PlannerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'first',
    };
  }

  render() {
    const Screens = screens[this.state.screen];
    const {navigation} = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            containerStyle={{
              height: hp(5),
              width: SCREENWIDTH / 2,
              borderRadius: 0,
              borderTopStartRadius: 5,
              borderTopEndRadius: 5,
              padding: 0,
            }}
            buttonStyle={{
              width: '100%',
              height: '100%',
              borderRadius: 0,
              backgroundColor:
                this.state.screen == 'first' ? '#930088' : 'transparent',
            }}
            titleStyle={{color: this.state.screen == 'first' ? '#fff' : '#000'}}
            title="Planned Events"
            onPress={() => this.setState({screen: 'first'})}
          />
          <Button
            containerStyle={{
              height: hp(5),
              borderTopStartRadius: 5,
              borderTopEndRadius: 5,
              width: SCREENWIDTH / 2,
              padding: 0,
              borderRadius: 0,
            }}
            titleStyle={{
              color: this.state.screen == 'second' || '#000',
            }}
            buttonStyle={{
              width: '100%',
              borderRadius: 0,
              height: '100%',
              backgroundColor:
                this.state.screen == 'second' ? '#EDEDED' : 'transparent',
            }}
            title="Pending Events"
            onPress={() => this.setState({screen: 'second'})}
          />
        </View>
        <Screens />
      </SafeAreaView>
    );
  }
}
