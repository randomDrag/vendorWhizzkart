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
import { Field, reduxForm } from 'redux-form';

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


submit(values){
  const {Name , Email , Mobile, Subject} = values;
const { descreption} = this.props.data;
  this.props.sendContact(Name,Email,Mobile,Subject,descreption,()=> this.props.navigation.navigate('Home'));


}


  render() {
   

    return (
      <ScrollView>
      <View style={style().root}>
          <View style={style().textContainer}>
          <Field
          component={CustomTextInput}
          placeholder="Name"
      
          autoComplete="username"
          name={'Name'}
         
        />
         <Field
         component={CustomTextInput}
          placeholder="Email"
          icon={'mail'}
          autoComplete="email"
          name={'Email'}
      
        />
        <Field
        component={CustomTextInput}
          placeholder="Mobile"
        
          autoComplete="tel"
          name={'Mobile'}
        />
        <Field
        component={CustomTextInput}
          placeholder="Subject"
          name={'Subject'}
          
          
        
        />
        <View style={style().textAreaContainer}>
        <TextInput style={style().textArea}
          placeholder="Description"
          multiline={true}
          numberOfLines={6}
          onChangeText={(e) => this.description(e)}
          defaultValue={this.props.data.discription}
       
        
        />
      
        </View>
      
        <View style={{marginVertical : 15 , justifyContent : 'center' , alignItems : 'center'}}>
        <CustomButton title="Send" width={200} onPress={this.props.handleSubmit(this.submit)}/>
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
const validate = values => {
  let errors = {};

  if (!values.Email) {
    errors.Email = 'Required';
  } else if (!validator.isEmail(values.Email)) {
    errors.Email = 'Invalid email address';
  }

  if (!values.Name) {
    errors.Name = 'Required';
  }

  if (!values.Mobile) {
    errors.MobileNumber = 'Required';

  }else if(!validator.isMobilePhone('+91' + Number(values.Mobile))){
    errors.Mobile = 'Invalid Mobile number ';
  }

  if (!values.Password) {
    errors.Password = 'Required';
  }

  if (!values.PasswordConfirm) {
    errors.PasswordConfirm = 'Required';
  }
  if(!values.Password == values.PasswordConfirm){
    errors.PasswordConfirm = 'Password not match';
    errors.Password = 'Password not match';
  }

  if (!values.Address) {
    errors.Address = 'Required';
  }
  // else if ( Number( values.Password) < 8) {
  //   errors.Password = 'must be strong password';
  // }

  return errors;
};
export default
reduxForm({
  form : 'contactForm'
})(

connect(mapStateToProps, {ContactusForm , sendContact})(Contactus));
