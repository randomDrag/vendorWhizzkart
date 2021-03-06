import {faSlidersH, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {Text, View, StyleSheet, SafeAreaView , TouchableOpacity} from 'react-native';

class CustomHeader extends React.Component {
  render() {

    let today = new Date;
    var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <SafeAreaView>
        <View style={style().container}>
          <View style={style().settingIcon}>
              <TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}}> 
            <FontAwesomeIcon icon={faSlidersH} size={30} color='#E94E4C'/>
            </TouchableOpacity>
          </View>

          <View style={style().infoStyle}>
            < Text allowFontScaling={false}  style={style().textHeading}>{typeof this.props.title == ('undefined'|| 'null') ? `${this.props.route.name}`: this.props.title}</Text>
            < Text allowFontScaling={false} style={style().textDate}>{today.toDateString('en-US', options)}</Text>
          </View>

          <View style={style().accountStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Account') }> 
            <FontAwesomeIcon icon={faUserCircle} size={30} color='#EA6566'/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = () => StyleSheet.create({

    container : {
        display : 'flex',
        flexDirection : 'row',
        height : 60,
 paddingHorizontal:5,
 backgroundColor: "#FFFFFF"
        
    },
    settingIcon :{
        justifyContent : 'center',
        padding: 5,
        marginRight : 20,
        flex : 0
        
    },
    infoStyle : {
        
        fontFamily : "Poppins-Regular",
        flex : 5,
        display  : 'flex',
        flexDirection : 'column',
        
        
 
        
    },
    textHeading : {
        fontFamily: 'Poppins-Bold' , fontSize : 20 , color : '#185675' , paddingTop : 5 ,
        flex : 2,
        textAlignVertical:'center'
      

    },
    textDate : {
        fontFamily : 'Poppins-Regular' , fontSize: 16 ,
        flex: 1.9,
        color : "#000"
        
     


    },
    accountStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5
    }
});

export default CustomHeader;
