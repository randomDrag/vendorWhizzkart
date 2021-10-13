import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
class Login extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={style.container}>
            <View style={{flex :2 , alignItems:'center', justifyContent:'center' , paddingTop:20}}>
            <LogoImage width = {200} height={200} padding ={3}/>
                 </View>
       
         <View style={style.card}>
        <Text>Login</Text>
         <CustomButton title="Sign in" />
         </View>
        


        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  card : {
     
     flex:3,
     width:"100%",
     borderTopLeftRadius:50,
     borderTopRightRadius:50,
     padding : 20,
     backgroundColor:'#F5F5F5',
     justifyContent : 'center',
     alignContent : 'center',
     display:'flex',
     elevation: 2,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 2,

  },
  loginText : {

  }
  
});

export default Login;
