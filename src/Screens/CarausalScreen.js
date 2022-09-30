import {Dimensions, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const EventsArray = [
  {
    id: 0,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    name: 'john smith',
    img: require('../assets/person.png'),
    title: 'Founder of Awesomeux Technology',
  },
  {
    id: 1,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    name: 'john smith',
    img: require('../assets/person.png'),
    title: 'Founder of Awesomeux Technology',
  },
  {
    id: 2,
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    name: 'john smith',
    img: require('../assets/person.png'),
    title: 'Founder of Awesomeux Technology',
  },
];
export default class CarausalScreen extends Component {
  state = {
    index: 0,
  };
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }
  _renderItem = ({item}) => {
    return (
      <View>
        <Text>{item.description}</Text>
        <Image>{item.description}</Image>
        <Text>{item.description}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <Text>CarausalScreen</Text>
        <Carousel
          ref={c => (this.carousel = c)}
          data={EventsArray}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          //   containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={index => this.setState({index})}
          //   scrollInterpolator={scrollInterpolator}
          //   slideInterpolatedStyle={animatedStyles}
          useScrollView={true}
        />
      </View>
    );
  }
}
