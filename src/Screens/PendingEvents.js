import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import {getFontSize, hp, wp} from '../responsive';

export default class PendingEvents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.navigation, 'plan1');
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
    ];
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EDEDED',
          paddingTop: 20,
        }}>
        {/* <Text style={{color: 'white' ,}}>PlannedEvents</Text> */}
        <FlatList
          data={EventsArray}
          renderItem={({item}) => (
            <View
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#C4C4C4',
                padding: 15,
                borderRadius: 12,
                marginBottom: 10,
                width: wp('90%'),
                // height: hp('13%'),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 3,
                }}>
                <Text>{item.date}</Text>
                <Text>{item.dayLeft} Days left</Text>
              </View>
              <Text style={{fontSize: getFontSize(22), fontWeight: '500'}}>
                {item.eventTitle}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
