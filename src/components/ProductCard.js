import React from 'react';

import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';

class ProductComponent extends React.Component {
  render() {
    return (
      <View style={style().RootContainer}>
        <View style={style().ImageContainer}>
          <Image style={style().Image} source={{uri : this.props.imageUrl}} />
        </View>
        <View style={style().TextContainer}>
          <Text style={style().status}>{this.props.status}</Text>
          <Text style={style().title}>{this.props.title}</Text>
          <Text style={style().dateTime}>{this.props.date}   Time {this.props.time}</Text>
          <Text style={style().price}>Price {<Text style={{  fontFamily: 'Poppins-Bold'}}> { <Text style={{color:"#E85555"}}>&#8377;</Text>}{this.props.price}</Text>}</Text>
        </View>
      </View>
    );
  }
}

const style = () =>
  StyleSheet.create({
    RootContainer: {
     
      height: 200,
      marginVertical: 12,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      elevation: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ImageContainer: {
      justifyContent: 'flex-start',
      alignSelf: 'flex-start',

      flex: 1,
      marginTop: -13,
    },
    TextContainer: {
     
      flex: 1,
    },
    Image: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
    },
    status: {
      fontFamily: 'Poppins-Bold',
      textAlign: 'right',
      fontSize: 18,
      marginHorizontal: 10,
      color: '#E85555',
    },
    title: {
      fontFamily: 'Poppins-Bold',
      textAlign: 'right',
      fontSize: 16,
      marginHorizontal: 10,
      color: '#4E7C94',
    },
    dateTime: {
      fontFamily: 'Poppins-Regular',
      textAlign: 'right',
      fontSize : 14,
      marginHorizontal: 10,
      color: '#4E7C94',
    },
    price: {
      fontFamily: 'Poppins-Regular',
      textAlign: 'right',
      fontSize: 16,
      marginHorizontal: 10,
      color: '#4E7C94',
    },
  });

export default ProductComponent;
