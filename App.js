import * as React from 'react';
import {Button as IconButton} from '@rneui/themed';
import inputStyles from './Components/CustomInput';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Navigationscreen from './src/navigation/index';
// import Navigationscreen from './src/navigation';
import {Provider} from 'react-redux';
import store from './store/store';
import Stack from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
  }

  async componentDidMount() {
    const logIn = await getUserSession();
    this.setState({loggedIn: logIn});
  }

  render() {
    const Navigation = Stack(this.state.loggedIn);

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;

export const setUserSession = async props => {
  try {
    // await AsyncStorage.clear();
    await AsyncStorage.setItem('session', props.toString());
    console.log(props, 'store');
  } catch (err) {
    await AsyncStorage.setItem('session', props);
  }
};

export const clearUserSession = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.log(err);
  }
};

export const getUserSession = async () => {
  try {
    let loggedIn = await AsyncStorage.getItem('session');

    if (typeof loggedIn == 'string') {
      loggedIn = loggedIn == 'true';
    }

    console.log(loggedIn, 'get');
    return loggedIn;
  } catch (err) {
    console.tron.log('Something went wrong on session');
    return false;
  }
};
