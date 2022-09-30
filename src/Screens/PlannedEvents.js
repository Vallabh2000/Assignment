import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {hp, SCREENWIDTH, wp} from '../responsive';

export default class PlannedEvents extends Component {
  render() {
    const EventsArray = [
      {
        id: 0,
        date: '10th January, 2022',
        dayLeft: '7',
        eventTitle: 'SMS Campaign',
      },
      {
        id: 1,
        date: '20th January, 2022',
        dayLeft: '17',
        eventTitle: 'LinkedIn Post',
      },
      {
        id: 2,
        date: '26th January, 2022',
        dayLeft: '22',
        eventTitle: 'Republic Day',
      },
    ];
    return (
      //   <SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#930088',
          paddingTop: 20,
        }}>
        {/* <Text style={{color: 'white' ,}}>PlannedEvents</Text> */}
        <FlatList
          data={EventsArray}
          renderItem={({item}) => (
            <View
              key={item.id}
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                padding: 15,
                borderRadius: 12,
                marginBottom: 10,
                width: wp('90%'),
                // height: hp('12%'),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 3,
                }}>
                <Text style={{color: 'white'}}>{item.date}</Text>
                <Text style={{color: 'white'}}>{item.dayLeft} Days left</Text>
              </View>
              <Text style={{fontSize: 24, fontWeight: '500', color: 'white'}}>
                {item.eventTitle}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      //   </SafeAreaView>
    );
  }
}
