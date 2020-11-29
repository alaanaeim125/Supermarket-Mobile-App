import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ConfigureAxios} from './assets/helperFunction';
import {Provider} from 'react-redux';
import store from './src/store/Store';
ConfigureAxios();

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => ConnectedApp);
