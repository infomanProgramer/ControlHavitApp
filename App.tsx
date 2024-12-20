/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/forms/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/forms/Login';
import { Provider, useSelector } from 'react-redux';
import {store} from './store/store';
import Settings from './src/forms/Settings';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  //const urlControlHavitAPI = useSelector((state) => state.urlControlHavitAPI);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Main}/>
          <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;