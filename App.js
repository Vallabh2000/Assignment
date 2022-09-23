import * as React from 'react';
import {Button as IconButton} from '@rneui/themed';
import inputStyles from './Components/CustomInput';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Navigationscreen from './src/navigation/index';
import Navigationscreen from './src/navigation';
import {Provider} from 'react-redux';
import store from './store/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigationscreen />
      </Provider>
    );
  }
}

export default App;
