import React  from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {faUser} from '@fortawesome/free-regular-svg-icons';

class CustomTextInput extends React.Component {
  render() {
    return (
      <View style={style().container}>
        <TextInput
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
      height : 70
    },

    InputStyle: {
      
        fontFamily : 'Poppins-Regular',
        fontWeight:"400",
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
      fontSize: 20,
      color: 'black',
      
    },
    icon: {
      marginLeft: 10,
      paddingRight: 10,
      alignSelf: 'center',
      alignContent:'center',
      flex: 2,
     

      
    },
  });
