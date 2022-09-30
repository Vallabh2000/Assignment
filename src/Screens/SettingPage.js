import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {hp} from '../responsive';
import CarausalScreen from './CarausalScreen';

class SettingPage extends Component {
  render() {
    _renderItem = ({item, index}) => {
      return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    };

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'rgba(255, 201, 11, 0.32)',
            height: hp('50%'),
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />
        <View>
          <CarausalScreen />
        </View>
      </View>
    );
  }
}
export default SettingPage;
