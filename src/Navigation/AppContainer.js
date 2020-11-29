import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

const AppContainer = (props) => {
  const {isAuthenticated} = props;

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppContainer;
