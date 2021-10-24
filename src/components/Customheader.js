import {faSlidersH, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {Text, View, StyleSheet, SafeAreaView , TouchableOpacity} from 'react-native';

class CustomHeader extends React.Component {
  render() {

    let today = new Date;
console.log(this.props.route.name)
    return (
      <SafeAreaView>
        <View style={style().container}>
          <View style={style().settingIcon}>
              <TouchableOpacity > 
            <FontAwesomeIcon icon={faSlidersH} size={30} color='#E94E4C'/>
            </TouchableOpacity>
          </View>

          <View style={style().infoStyle}>
            <Text style={style().textHeading}>{typeof this.props.title == ('undefined'|| 'null') ? `${this.props.route.name}`: this.props.title}</Text>
            <Text style={style().textDate}>{today.toLocaleDateString('en-US', {month : 'short', day : '2-digit' , year : 'numeric'})}</Text>
          </View>

          <View style={style().accountStyle}>
            <FontAwesomeIcon icon={faUserCircle} size={30} color='#EA6566'/>
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
 marginHorizontal : 10,
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
        
     


    },
    accountStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 5
    }
});

export default CustomHeader;
