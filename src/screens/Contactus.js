import {faFile, faUser} from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/login_logout/Button.custom';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Contactus extends React.Component {
  render() {
    const str = this.props.data;

    return (
      <View style={style().root}>
          <View style={style().textContainer}>
          <CustomTextInput
          placeholder="Name"
          icon={faUser}
          autoComplete="username"
        />
         <CustomTextInput
          placeholder="Email"
          icon={faEnvelope}
          autoComplete="email"
        />
        <CustomTextInput
          placeholder="Mobile"
          icon={faPhone}
          autoComplete="tel"
        />
        <CustomTextInput
          placeholder="Subject"
          icon={faFile}
        
        />
        <View style={style().textAreaContainer}>
        <TextInput style={style().textArea}
          placeholder="Description"
          multiline={true}
          numberOfLines={6}
        
        />
      
        </View>
      
        <View style={{marginVertical : 15 , justifyContent : 'center' , alignItems : 'center'}}>
        <CustomButton title="Send" width={200}/>
        </View>
      
        
          </View>
       
      </View>
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
  return {data: state.privacy};
};

export default connect(mapStateToProps, {})(Contactus);
