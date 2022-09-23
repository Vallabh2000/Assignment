import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';

export default class Tabbar extends Component {
  render() {
    const {navigation} = this.props;
    const currentTab = navigation.state;
    return (
      <SafeAreaView
        //   onPress={()=>{
        //     navigation.navigate("SettingPage")
        //   }}
        style={{
          flex: 1,
        }}>
        <Text>Hello!</Text>
      </SafeAreaView>
    );
  }
}
