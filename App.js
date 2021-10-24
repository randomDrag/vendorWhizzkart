import React from 'react';

/* Adding redux here  */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from './src/reducers';
import thunk from 'redux-thunk';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';

/* importing screen page */

import FirstScreen from './src/screens/home.start';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';

import Dashborad from './src/screens/Dashboard';
import IconComponent from './src/components/IconComponent';
import CustomHeader from './src/components/Customheader';

/* 
creating store for dev and production

*/

// const store = createStore(reducers, {}, applyMiddleware(thunk));

/* 

comment debug version of redux or install React Native debugger and enable debug in mobile

*/

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

/* 

navigation 

*/

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class App extends React.Component {
  
  isAuth = true;

  constructor(props){
    super(props);
   
  }


  Dashborad() {
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{header: (props)=> <CustomHeader {...props}/>}} >
 
          <Tab.Screen name="Home" component={Dashborad}  options={{ tabBarIcon : () => <IconComponent src={ require('./src/images/home.png')} /> }} />
    
      </Tab.Navigator>
    );
  }

  LoginScreens() {
    return (
      <Stack.Navigator
        initialRouteName="FirstScreen"
        defaultScreenOptions={{headerShown: false}}>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>

      { this.isAuth ? <this.Dashborad/> : <this.LoginScreens/>}


          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}

export default App;
