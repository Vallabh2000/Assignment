import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {isIphoneX} from './DevicePlatform';

const {height, width} = Dimensions.get('window');

const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export let SCREENWIDTH = width;
export let SCREENHEIGHT = height;

let TARGET_MOBILE_WIDTH = 360;
let TARGET_MOBILE_HEIGHT = SCREENHEIGHT;
if (Platform.OS === 'ios') {
  if (SCREENWIDTH >= 375 && SCREENWIDTH < 414) {
    TARGET_MOBILE_WIDTH = 250;
  } else if (SCREENWIDTH >= 414) {
    TARGET_MOBILE_WIDTH = 300;
  } else {
    TARGET_MOBILE_WIDTH = 350;
  }

  if (SCREENHEIGHT >= 667 && SCREENHEIGHT < 712) {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 120;
  } else if (SCREENHEIGHT >= 712 && SCREENHEIGHT <= 812) {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 75;
  } else {
    TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 150;
  }
} else {
  TARGET_MOBILE_WIDTH = 480;

  if (SCREENWIDTH <= 480) {
    TARGET_MOBILE_WIDTH = 300;
  }

  TARGET_MOBILE_HEIGHT = 700;

  // if (SCREENWIDTH >= 480) {
  //   TARGET_MOBILE_WIDTH = 350;
  // } else if (SCREENWIDTH >= 360) {
  //   TARGET_MOBILE_WIDTH = 300;
  // } else if (SCREENWIDTH >= 412) {
  //   TARGET_MOBILE_WIDTH = 350;
  // }

  // if (SCREENHEIGHT >= 847) {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 120;
  // } else if (SCREENHEIGHT >= 712 && SCREENHEIGHT <= 812) {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 75;
  // } else {
  //   TARGET_MOBILE_HEIGHT = SCREENHEIGHT - 150;
  // }
}
function widthPercentageToDP(widthPercentage) {
  const element =
    typeof widthPercentage === 'number'
      ? widthPercentage
      : parseFloat(widthPercentage);
  return PixelRatio.roundToNearestPixel((SCREENWIDTH * element) / 100);
}

function heightPercentageToDP(heightPercentage) {
  const element =
    typeof heightPercent === 'number'
      ? heightPercentage
      : parseFloat(heightPercentage);
  return PixelRatio.roundToNearestPixel((SCREENHEIGHT * element) / 100);
}

const listenOrientationChange = (that) => {
  Dimensions.addEventListener('change', (newDimensions) => {
    SCREENWIDTH = newDimensions.window.width;
    SCREENHEIGHT = newDimensions.window.height;
    that.setState({
      orientation: SCREENWIDTH < SCREENHEIGHT ? 'portrait' : 'landscap',
    });
  });
};

export function getResWidth(no) {
  return widthPercentageToDP((no * 100) / TARGET_MOBILE_WIDTH);
}

export function getResHeight(no) {
  return heightPercentageToDP((no * 100) / TARGET_MOBILE_HEIGHT);
}

// MARK: -FontSize;
const standardLength =
  TARGET_MOBILE_WIDTH > TARGET_MOBILE_HEIGHT
    ? TARGET_MOBILE_WIDTH
    : TARGET_MOBILE_HEIGHT;
const offset =
  TARGET_MOBILE_WIDTH > TARGET_MOBILE_HEIGHT
    ? 0
    : Platform.OS === 'ios'
    ? 78
    : 0; //StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

export function getFontpercent(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function getFontSize(fontSize, standardScreenWidth = 380) {
  // const heightPercent = (fontSize * deviceHeight) / standardScreenWidth;
  // return Math.round(heightPercent);
  // // return fontSize + 3.0441176471;
  const entireScreenWidth = Dimensions.get('window').width;
  return (entireScreenWidth / standardScreenWidth) * fontSize;
}

export {widthPercentageToDP as wp, heightPercentageToDP as hp};
