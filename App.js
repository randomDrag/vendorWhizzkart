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

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

/* importing screen page */

import FirstScreen from './src/screens/home.start';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgetPassword from './src/screens/ForgetPassword';

import Dashborad from './src/screens/Dashboard';
import IconComponent from './src/components/IconComponent';
import CustomHeader from './src/components/Customheader';
import TodayOrder from './src/screens/TodayOrders';

import AcceptedProduct from './src/screens/Accepted.Product';
import PendingProduct from './src/screens/Pending.Product';
import RejectedProduct from './src/screens/Rejected.Product';


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
const TopTab = createMaterialTopTabNavigator();



class App extends React.Component {
  isAuth = true;

  constructor(props) {
    super(props);
    // this.ProductBar = this.ProductBar.bind(this);
  }






  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            {this.isAuth ? <Dashboard /> : <LoginScreens />}
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}



/* TOP TAB BAR */

const ProductBar = () =>{

  return (
    <TopTab.Navigator  initialRouteName="accepted" screenOptions={{
      // tabBarActiveTintColor​ : '#26607A',
      tabBarStyle: {
        fontFamily: 'Poppins-Regular',
      },
      tabBarIndicatorContainerStyle : {
        color : 'red',
        fontFamily: 'Poppins-Regular',
      }
    }}>
      <TopTab.Screen name="accepted" component={AcceptedProduct}/>
      <TopTab.Screen name="Pending" component={PendingProduct}/>
      <TopTab.Screen name="Rejected" component={RejectedProduct}/>
    </TopTab.Navigator>
  )
}


const Dashboard = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{header: props => <CustomHeader {...props} />}}>
      <Tab.Screen
        name="Home"
        component={Dashborad}
        options={{
          tabBarIcon: () => (
            <IconComponent src={require('./src/images/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductBar}
        options={{
          tabBarIcon: () => (
            <IconComponent src={require('./src/images/package.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={TodayOrder}
        options={{
          tabBarIcon: () => (
            <IconComponent src={require('./src/images/clipboard.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="chat"
        component={TodayOrder}
        options={{
          tabBarIcon: () => (
            <IconComponent src={require('./src/images/chat.png')} />
          ),
        }}
      />

      <Tab.Screen  name="Account" component={TodayOrder}
        options={{
          tabBarIcon: () => (
            <IconComponent src={require('./src/images/account.png')} />
          ),
        }} />
    </Tab.Navigator>
  );
}


const LoginScreens = () => {
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



export default App;
