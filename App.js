import * as React from 'react';
import {Button as IconButton} from '@rneui/themed';
import inputStyles from './Components/CustomInput';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Navigationscreen from './src/navigation/index';
// import Navigationscreen from './src/navigation';
import {Provider} from 'react-redux';
import store from './store/store';
import Stack from './src/navigation';

class App extends React.Component {
  render() {
    const data = store.getState();

    const isAuth = data.users.isAuth;

    console.log(data.users.isAuth, 'App');

    const Navigation = Stack(isAuth);

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
