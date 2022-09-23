import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';
import {VectorIcon} from '../assets/vectoreicon';
import {string} from 'prop-types';
import {Button} from 'react-native-elements';

export class NavHeader extends Component {
  static navigationOptions = ({navigation}) => {
    // console.log(navigation.getParam());
    const backBtn = () => {
      const backProps = navigation.getParam('backProps');
      if (typeof backProps !== 'undefined') {
        const containerStyle = backProps?.containerStyle;
        const buttonStyle = backProps?.buttonStyle;
        const onPress = backProps?.onPress;
        return (
          <TouchableOpacity onPress={onPress} style={[containerStyle]}>
            <VectorIcon
              size={20}
              type="Ionicons"
              name="ios-chevron-back"
              color={'#000'}
              style={[buttonStyle]}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };
    const notificationBtn = () => {
      const notiBtnProps = navigation.getParam('notiBtnProps');
      if (typeof notiBtnProps !== 'undefined') {
        const containerStyle = notiBtnProps?.containerStyle;
        const buttonStyle = notiBtnProps?.buttonStyle;
        const type = notiBtnProps?.type;
        const name = notiBtnProps?.name;
        const onPress = notiBtnProps?.onPress;
        return (
          <TouchableOpacity
            onPress={onPress}
            style={[{marginEnd: 5}, containerStyle]}>
            <VectorIcon
              size={20}
              type={type}
              name={name}
              color={'#000'}
              style={[buttonStyle]}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };
    const menuBtn = () => {
      const menuBtnProps = navigation.getParam('menuBtnProps');
      if (typeof menuBtnProps !== 'undefined') {
        const containerStyle = menuBtnProps?.containerStyle;
        const buttonStyle = menuBtnProps?.buttonStyle;
        const type = menuBtnProps?.type;
        const name = menuBtnProps?.name;
        const onPress = menuBtnProps?.onPress;
        return (
          <TouchableOpacity onPress={onPress} style={[containerStyle]}>
            <VectorIcon
              size={20}
              type={type}
              name={name}
              color={'#000'}
              style={[buttonStyle]}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };
    const imgBtn = () => {
      const imgProps = navigation.getParam('imgProps');
      const source = imgProps?.source;
      return (
        <Image
          source={`${source}`}
          style={{width: 30, height: 30, borderRadius: 100}}
        />
      );
    };
    const headerBackground = () => {
      const headerBackProps = navigation.getParam('headerBackProps');
      const color = headerBackProps?.color;
      return (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: color ? color : 'lightgray',
          }}></View>
      );
    };
    return {
      // headerShow:
      title: navigation.getParam('title'),
      headerBackground: headerBackground(),
      headerLeft: [backBtn(), imgBtn()],
      headerLeftContainerStyle: {
        flexDirection: 'row',
        marginLeft: '2%',
        alignItems: 'center',
      },
      headerRight: [notificationBtn(), menuBtn()],
      headerRightContainerStyle: {
        flexDirection: 'row',
        marginRight: '2%',
        alignItems: 'center',
      },
    };
  };
}

export default NavHeader;

// //<SafeAreaView>
// <View
// style={{
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   paddingHorizontal: 10,
// }}>
// <View
//   style={{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//   <Image
//     source={require('../assets/image.jpeg')}
//     style={{width: 50, height: 50, borderRadius: 100, marginEnd: 5}}
//   />
//   <View>
//     <Text style={{fontSize: 18}}>Start a new project</Text>
//     <Text style={{fontSize: 12}}>view more details</Text>
//   </View>
// </View>
// <View
//   style={{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }}>
//   {/* <Icon size={20} name="notifications-outline" color={'lightgray'} /> */}
//   <VectorIcon
//     size={20}
//     type="Ionicons"
//     name="notifications-outline"
//     color={'#000'}
//     style={{marginEnd: 10}}
//   />
//   <VectorIcon
//     size={20}
//     type="Ionicons"
//     name="menu-outline"
//     color={'#000'}
//     style={{}}
//   />
// </View>
// </View>
// </SafeAreaView>

// classfunction Header() {
//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingHorizontal: 10,
//         }}>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           <Image
//             source={require('../assets/image.jpeg')}
//             style={{width: 50, height: 50, borderRadius: 100, marginEnd: 5}}
//           />
//           <View>
//             <Text style={{fontSize: 18}}>Start a new project</Text>
//             <Text style={{fontSize: 12}}>view more details</Text>
//           </View>
//         </View>
//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           {/* <Icon size={20} name="notifications-outline" color={'lightgray'} /> */}
//           <VectorIcon
//             size={20}
//             type="Ionicons"
//             name="notifications-outline"
//             color={'#000'}
//             style={{marginEnd: 10}}
//           />
//           <VectorIcon
//             size={20}
//             type="Ionicons"
//             name="menu-outline"
//             color={'#000'}
//             style={{}}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
