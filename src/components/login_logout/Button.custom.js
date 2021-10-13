import React from 'react';

import {   Text, TouchableOpacity , StyleSheet, View} from 'react-native';

class CustomButton extends React.Component {
  render() {
    return <View>
    
    <TouchableOpacity
            style={style(this.props.backgroundColor , this.props. width).buttonStyle}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={{color : '#FFFFFF' , fontSize:typeof fontsize == "undefined" || "null" ? 18 :fontsize}}>{this.props.title}</Text>
          </TouchableOpacity>
    </View>;
  }
}

const style = ( backgroundColor , width) => StyleSheet.create({
    buttonStyle: {
        padding: 20,
        width: typeof width == "undefined" || "null" ? 350 :width,
        borderRadius: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : typeof backgroundColor == "undefined" || "null" ? '#E84341' :backgroundColor
      },

});


export default CustomButton;
