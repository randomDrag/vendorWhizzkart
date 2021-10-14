/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, View, SafeAreaView} from 'react-native';
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Adding redux here  */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware , compose} from 'redux';

import reducers from './src/reducers';
import thunk from 'redux-thunk';


import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

/* importing screen page */

import FirstScreen from './src/screens/home.start';

import Login from './src/screens/Login';

/* 
creating store for dev and production

*/


import { composeWithDevTools } from 'remote-redux-devtools';

// const store = createStore(reducers, {}, applyMiddleware(thunk));

const store = createStore( reducers, {},  compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName ="FirstScreen">
            <Stack.Screen name="FirstScreen" component={FirstScreen} 
            
            options={{headerShown : false }}
            />


<Stack.Screen name="Login" component={Login} 
            
            options={{headerShown : false }}
            />
          </Stack.Navigator>

        </NavigationContainer>
        </SafeAreaProvider>

      </Provider>
    );
  }
}




export default App;
