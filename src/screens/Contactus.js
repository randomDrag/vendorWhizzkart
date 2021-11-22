import {faFile, faUser} from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {
 
  View,
  StyleSheet,

  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/login_logout/Button.custom';

import {ContactusForm , sendContact} from '../actions';
import { ScrollView } from 'react-native-gesture-handler';
class Contactus extends React.Component {

  
  names(e){

    this.props.ContactusForm(e,this.props.data.email,this.props.data.mobile,this.props.data.subject,this.props.data.descreption);
  }
  email(e){

    this.props.ContactusForm(this.props.data.name,e,this.props.data.mobile,this.props.data.subject,this.props.data.descreption)
  }

  number(e){

    this.props.ContactusForm(this.props.data.name,this.props.data.email,e,this.props.data.subject,this.props.data.descreption)
  }
subject(e){

  this.props.ContactusForm(this.props.data.name,this.props.data.email,this.props.data.mobile,e,this.props.data.descreption)
}

description(e){

  this.props.ContactusForm(this.props.data.name,this.props.data.email,this.props.data.mobile,this.props.data.subject,e)
}


submit(){
const {name,email,mobile,subject, descreption} = this.props.data;
  this.props.sendContact(name,email,mobile,subject,descreption,()=> this.props.navigation.navigate('Home'));


}


  render() {
   

    return (
      <ScrollView>
      <View style={style().root}>
          <View style={style().textContainer}>
          <CustomTextInput
          placeholder="Name"
          icon={faUser}
          autoComplete="username"
          onChangeText={(e) => this.names(e)}
          defaultValue={this.props.data.name}
        />
         <CustomTextInput
          placeholder="Email"
          icon={faEnvelope}
          autoComplete="email"
          onChangeText={(e) => this.email(e)}
          defaultValue={this.props.data.email}
        />
        <CustomTextInput
          placeholder="Mobile"
          icon={faPhone}
          autoComplete="tel"
          onChangeText={(e) => this.number(e)}
          defaultValue={this.props.data.mobile}
        />
        <CustomTextInput
          placeholder="Subject"
          icon={faFile}
          onChangeText={(e) => this.subject(e)}
          defaultValue={this.props.data.subject}
        
        />
        <View style={style().textAreaContainer}>
        <Text allowFontScaling={false}Input style={style().textArea}
          placeholder="Description"
          multiline={true}
          numberOfLines={6}
          onChangeText={(e) => this.description(e)}
          defaultValue={this.props.data.discription}
        
        />
      
        </View>
      
        <View style={{marginVertical : 15 , justifyContent : 'center' , alignItems : 'center'}}>
        <CustomButton title="Send" width={200} onPress={()=> this.submit()}/>
        </View>
      
        
          </View>
       
      </View>
      </ScrollView>
    );
  }
}
const style = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer : {
        width : 300
    },textArea : {
       fontFamily : 'Poppins-Regular',
       fontSize : 16,
       
    
        width: '100%',
        textAlign :'center'

    },textAreaContainer :{
        textAlign : 'center',
        // borderColor : 'red',
        // borderWidth : 2,
        // borderRadius : 5
        backgroundColor : '#FFF',
        borderRadius : 15 ,
        padding : 5,
        justifyContent : 'center',
        alignItems : 'center',
        
    }
  });

const mapStateToProps = state => {
  return {data: state.contactus};
};

export default connect(mapStateToProps, {ContactusForm , sendContact})(Contactus);
