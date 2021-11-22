import React  from 'react';

import {View, TextInput, TouchableOpacity, StyleSheet , Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
class CustomTextInput extends React.Component {
  render() {

    const {error, touched} = this.props.meta;
    
    const isErrorVisible = () => {
      return touched && error 
          ? <Text style={style().errorText}>{error}</Text> 
          : null}





    return (
      <View>      
        <View style={style().container}>
        <TextInput
        {...this.props}
        multiline={this.props.multiline}
        numberOfLines={this.props.numberOfLines}
          style={style().InputStyle}
          placeholder={this.props.placeholder}
          onChangeText={this.props.input.onChange}
          defaultValue={this.props.input.value}
          autoCompleteType={this.props.autoCompleteType}
          secureTextEntry={this.props.secure == null ? false : this.props.secure}
          placeholderTextColor="#AAAAAA" 
          onBlur={this.props.input.onBlur}
          onFocus={this.props.input.onFocus}
          
        />
        <TouchableOpacity style={{justifyContent : 'center'}} onPress={this.props.onPress}>

          <View  style={style().icon} >
          <Icon
        
        name={this.props.icon == null ? "person" : this.props.icon}
       
        size={25}
        color="#AAAAAA"
        
      />
            </View>

      
        </TouchableOpacity>
       
      </View>
      {isErrorVisible()}
      </View>

    );
  }
}

export default CustomTextInput;



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
    
     
      alignItems:'center',
      justifyContent:'center',
      flex: 2,

     

      
    },
    errorText :{
      marginHorizontal : 15,
      textAlign : 'right',
      color : 'red',
      marginBottom : 5,
      fontFamily : 'Poppins-Regular'
    }
  });
