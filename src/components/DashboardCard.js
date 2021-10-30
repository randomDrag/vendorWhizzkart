import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

class DashboardCard extends React.Component {
  render() {
    return (
      <View style={style().cardContainer}>
        <View style={style().topContainer}>
          <Image
            source={this.props.image}
            style={style().orderImage}
          />
          <View style={style().growthContainer}>
            <Image
              source={this.props.dishImage}
              style={style().growthImage}
            />
            <Text style={style().growthText}>{`${this.props.growth}%`}</Text>
          </View>
        </View>

        <View style={style().BottomContainer}>
          <Text style={style().OderText}>{this.props.orders}</Text>
          <Text style={style().fontText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const style = () =>
  StyleSheet.create({
     
    cardContainer: {
      width: '45%',
     height : 250,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      elevation: 2,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
    },
    topContainer : {
        display : 'flex',
        flexDirection : 'row',
        width : '100%',
        flex :1.6,
    
    },
    orderImage :{
        width : 75,
        height : 90,
        flex : 1,
        resizeMode : 'contain',
        justifyContent : 'center',
        alignSelf : 'center',
        padding:0
    },
growthContainer :{
    flex : 1
},
growthImage : {
    height : 75 ,
    width : 75,
    position : 'relative',
    resizeMode : 'contain',
    alignSelf : 'flex-end',
    marginRight : -12,
    marginTop : -12,
   
},
growthText : {
    textAlign : 'right',
 paddingHorizontal : 10,
 fontSize : 16,
 fontFamily : 'Poppins-Regular',
 color :'#185572'
},


BottomContainer : {
    flex : 1,
    padding:0,
    justifyContent : 'center',
    alignItems:'flex-start'
  
},
OderText : {
    fontFamily : 'Poppins-Bold',
    fontSize : 36,
    color :'#E74240',

      flex : 2
},
fontText :{
    fontFamily : 'Poppins-Bold',
    alignSelf : 'stretch',
    color : '#255C7A',
    fontSize : 16,
    flex: 1,

}
  });

export default DashboardCard;
