/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* Adding redux here  */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './src/reducers';
import thunk from 'redux-thunk';

import React from 'react';


import {createAppContainer} from 'react-navigation';


import {createStackNavigator} from'@react-navigation/stack';


/* importing screen page */

import FirstScreen from './src/screens/home.start';



/* 
creating store for dev and production

*/



const store = createStore(reducers, {} , applyMiddleware(thunk));


import { Text, View , SafeAreaView} from 'react-native';


let rootStack = createStackNavigator({

  'FirstPage' : FirstScreen,
  


})




let Navigation = createAppContainer(rootStack);




class App extends React.Component {
  render() {
    return (
    
        <Provider store={store}>
          <Navigation/>
        </Provider>
   
    
    );
  }
}



export default App;
