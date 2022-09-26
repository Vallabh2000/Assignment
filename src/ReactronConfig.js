import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)

  .configure({name: 'aiab'}) // controls connection & communication settings

  .use(reactotronRedux())

  .useReactNative() // add all built-in react native plugins

  .connect(); // let's connect!

console.tron = Reactotron;

reactotron.onCustomCommand('Button', () => {});

export default reactotron;
