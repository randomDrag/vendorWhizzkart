/**
 * @format
 */

import {AppRegistry , View , Text} from 'react-native';
import React from 'react';

import App from './App';
import FirstPage from './src/screens/home.start'

import {name as appName} from './app.json';


// const App = (props) =>  {
    
//     return(
    
    
    
  
//       <Text>App1</Text>
  
//   )}


AppRegistry.registerComponent(appName, () => App);
