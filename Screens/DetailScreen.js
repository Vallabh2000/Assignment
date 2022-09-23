import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
      </View>
    );
  }
}
