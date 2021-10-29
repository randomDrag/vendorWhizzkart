import React  from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, StyleSheet , Text} from 'react-native';
import {FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {faUser} from '@fortawesome/free-regular-svg-icons';

class CustomTextInput extends React.Component {
  render() {
    return (
      <View>      
        <View style={style().container}>
        <TextInput
        multiline={this.props.multiline}
        numberOfLines={this.props.numberOfLines}
          style={style().InputStyle}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          defaultValue={this.props.defaultValue}
          autoCompleteType={this.props.autoCompleteType}
          secureTextEntry={this.props.secure == null ? false : this.props.secure}
          placeholderTextColor="#AAAAAA" 
        />
        <TouchableOpacity style={{justifyContent : 'center'}} onPress={this.props.onPress}>

        <FontAwesomeIcon
          icon={this.props.icon == null ? faUser : this.props.icon}
          style={style().icon}
          size={25}
          color="#AAAAAA"
        />
        </TouchableOpacity>
       
      </View>
      <Text style={style().errorText}>{this.props.error}</Text>
      </View>

    );
  }
}

export default CustomTextInput;


CustomTextInput.propTypes = {
    placeholder  : PropTypes.string,
    autoCompleteType : PropTypes.string
};



const style = () =>
  StyleSheet.create({
    container: {
    
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 40,
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#FFFFFF',
      height : 55,
  

    },

    InputStyle: {
      
        fontFamily : 'Poppins-Regular',
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      fontSize: 16,
      color: 'black',
      alignItems : 'center',
      justifyContent: 'center',
textAlignVertical : 'center',
  

    },
    icon: {
      marginLeft: 10,
      paddingRight: 10,
      alignSelf: 'center',
      alignContent:'center',
      flex: 2,
     

      
    },
    errorText :{
      marginHorizontal : 15,
      textAlign : 'right',
      color : 'red',
      marginBottom : 5
    }
  });
