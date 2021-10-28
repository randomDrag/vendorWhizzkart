import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import {DrawerContentScrollView, DrawerItem , } from '@react-navigation/drawer';
import { connect } from 'react-redux';

import {Logout} from '../actions';

class DrawerContent extends React.Component {



render(){

  return (
    <View style={style().root}>
      <View style={style().ImageContainer}>
        <Image style={style().Image} source={require('../images/logo.png')} />
      </View>

      <View style={{ marginTop : 20}}>
        <DrawerItem  
        icon={()=> <Image style={{width : 25 , height : 25}} source={require('../images/myprofile.png')}/>}
        labelStyle={style().MyProfile} label="My profile"/>
      </View>
      <View style={style().DrawerMargin}>
        <DrawerItem  
        icon={()=> <Image style={{width : 25 , height : 25}} source={require('../images/share.png')}/>}
        labelStyle={style().MyProfile} label="Share app"/>
      </View>
      <View style={style().DrawerMargin}>
        <DrawerItem 
        icon={()=> <Image style={{width : 25 , height : 25 , padding : 3}} source={require('../images/call.png')}/>}
        labelStyle={style().MyProfile} label="Raise a query" onPress={() => this.props.navigation.navigate('Raise a query')}/>
      </View>
      <View style={style().DrawerMargin}>
        <DrawerItem  
        icon={()=> <Image style={{width : 25 , height : 25}} source={require('../images/Tc.png')}/>}
        labelStyle={style().MyProfile} label="Terms & Condition" onPress={()=> this.props.navigation.navigate('Terms & Conditions') }/>
      </View>

      <View style={style().DrawerMargin}>
        <DrawerItem  
        icon={()=> <Image style={{width : 25 , height : 25}} source={require('../images/privacy.png')}/>}
        labelStyle={style().MyProfile} label="Privacy Policy"
        onPress={()=> this.props.navigation.navigate('Privacy policy')}
        />
      </View>

      <View style={style().DrawerMargin}>
        <DrawerItem  
        icon={ ()=> <Image style={{width : 25 , height : 25}} source={require('../images/logout.png')}/>}
        labelStyle={style().MyProfile} label="Logout" onPress={()=> this.props.Logout()}/>
      </View>

    </View>
  );
}
}

const style = () =>
  StyleSheet.create({
    root: {
      backgroundColor: '#185574',
      flex: 1,
    },
    ImageContainer: {
      backgroundColor: '#FFF',
    //   borderColor : 'red',
    //   borderWidth : 2,
      justifyContent : 'center',
      height : 90,
      paddingHorizontal : 10,
      marginTop : 50
    },
    Image: {
       
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },MyProfile :{

        color : "#FFF",
        fontFamily : "Poppins-Medium", 
        fontSize : 16,
        justifyContent : 'center',
        alignItems: 'center',
    
    },
    DrawerMargin : {
marginTop :15
    }
  });

  export default connect(null , {Logout})( DrawerContent );