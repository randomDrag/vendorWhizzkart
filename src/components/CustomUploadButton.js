import React from 'react';

import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';

import Upload from '../lib/document.picker';

class CustomUploadButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {Name: undefined};
  }

  render() {
    const name = this.state.Name;

    return (
      <TouchableOpacity
        style={style(this.props.backgroundColor, this.props.width).InputStyle}
        onPress={async () => {
          let val = await Upload();
            console.log(val);
          this.setState({Name: val.name});
          this.props.value(val);
        }}>
        <View style={style().container}>
          <Text style={style(this.props.fontSize).textStyle}>
            {typeof name == ('undefined' || 'null')
              ? this.props.title
              : this.state.Name}
          </Text>

          <FontAwesomeIcon
            icon={this.props.icon == null ? faUser : this.props.icon}
            style={style().icon}
            size={25}
            color="#AAAAAA"
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const style = (backgroundColor, width, fontsize) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      height: 55,
    },
    InputStyle: {
      fontFamily: 'Poppins-Regular',
      fontSize: 20,
      color: 'black',

      backgroundColor: '#FFFFFF',
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 40,
      marginTop: 10,
      marginBottom: 10,
    },
    textStyle: {
      color: '#AAAAAA',
      alignItems: 'center',
      fontFamily: 'Poppins-Regular',
      fontSize: typeof fontsize == ('undefined' || 'null') ? 16 : fontsize,

      flex: 1,
      textAlign: 'center',
    },

    icon: {
      marginLeft: 10,
      paddingRight: 10,
      alignSelf: 'center',
      alignContent: 'center',
    },
  });

export default CustomUploadButton;
