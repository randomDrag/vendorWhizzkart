import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
import CustomText from '../components/CustomText';
import {faUser , faEye , faEyeSlash} from '@fortawesome/free-regular-svg-icons';
class Login extends React.Component {

  constructor(props){
super(props);
this.state = {isSecure : true }
  }

  render() {
    let isSecure = this.state.isSecure;

    return (
      <SafeAreaView>
        <View style={style.container}>
            <View style={{flex :2 , alignItems:'center', justifyContent:'center' , paddingTop:20}}>
            <LogoImage width = {200} height={200} padding ={3}/>
                 </View>
       
         <View style={style.card}>
        <Text style={style.loginText}>Login</Text>
        <View>

        <CustomText placeholder="Email or Mobile" icon={faUser}/>
        <CustomText placeholder="Password" icon={ isSecure == false ? faEye : faEyeSlash} secure={isSecure} onPress={ () => {isSecure == true ? this.setState({isSecure : false}) : this.setState({isSecure : true}) ; console.log(isSecure)}}/>

        </View>
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
     elevation: 5,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.5,
     shadowRadius: 2,
 


  },
  loginText : {
alignItems : 'center',
justifyContent : 'center',
fontSize :30,
fontWeight:'800',
color : "#588094",
width : "100%",

textAlign : 'center',
marginBottom :20

  }
  
});



export default Login;
