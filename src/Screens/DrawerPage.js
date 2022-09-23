import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

export default class Drawer extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
        }}></SafeAreaView>
    );
  }
}
