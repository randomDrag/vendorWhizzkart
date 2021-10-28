import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, Image , Text, Button} from 'react-native';
import CustomButton from './login_logout/Button.custom';

class OrderlistAR extends React.Component {
  render() {
    return (
      <View style={style().mainContainer}>
        <View style={style().imageContainer}>
          <Image style={style().image} source={ {uri : this.props.image}} />
          <View style={style().imageTextContainer}>
            <Text style={style().imageText}>Order No. { <Text style={{color :"#E84745" , fontFamily: 'Poppins-Bold'}}>{this.props.OrderId}</Text>}</Text>
            <Text style={style().imageText}>{this.props.Date}</Text>
            <Text style={style().imageText}>Time : {this.props.time}</Text>
          </View>
        </View>

{/* info of order */}
         <View style={style().orderInfoContainer}>

            <View style={style().CatNameContainer}>
<Text style={style().catName}>Category Name</Text>
<Text style={style().catNameInfo}>{this.props.Name}</Text>

            </View>
            <View style={style().AmountNameContainer}>
<Text style={style().Amount}>Amount</Text>
<Text style={style().AmountInfo}>{this.props.Amount}</Text>

            </View>
            <View style={style().paymentNameContainer}>
<Text style={style().payment}>Payment Mode</Text>
<Text style={style().paymentInfo}>{this.props.payment}</Text>

            </View>
            
         </View>

         {/* Break Line */}
         <View
  style={{
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
    marginHorizontal : 15
  }}
/>

{/* Address  */}

<View style={style().addressContainer}>
    <FontAwesomeIcon icon={faMapMarkerAlt} color="#E84745"/>
<View style={style().AddTextContainer}>
<Text style={style().textAdd}>{this.props.addressTitle}</Text>
<Text style={style().textBody}>{this.props.addressBody}</Text>
</View>
</View>

{/* buttons */}

<View style={style().buttonContainer}>

<Text style={{fontFamily : 'Poppins-Regular' , color : '#E84745' , fontSize : 18, padding : 10}}>{this.props.status}</Text>

</View>

      </View>
    );
  }
}

const style = () =>
  StyleSheet.create({
    mainContainer: {
    //   borderColor: 'red',
    //   borderWidth: 2,
      height: 350,
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      elevation: 2,
    },
    imageContainer: {
        display : 'flex',
        flexDirection : 'row'
    },
    imageText :{
textAlign :'right',
fontFamily: "Poppins-Regular",
paddingHorizontal :10,
color :"#185574"
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'cover',
      marginTop: -10,
     
    },
    imageTextContainer : {
      
        justifyContent : 'center',
       textAlign :"right",
        flex : 1
        
    },
    CatNameContainer : {
        flex : 1,
        justifyContent :'center',
        alignItems : 'center'
    },AmountNameContainer :{
        flex : 1,
        justifyContent :'center',
        alignItems : 'center'
    },paymentNameContainer :{
        flex : 1,
        justifyContent :'center',
        alignItems : 'center'
    },
    orderInfoContainer :{
        display : 'flex',
        flexDirection  : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 10
    },
    catName : {
        fontFamily : 'Poppins-Regular',
        color : "#185574"
        
    },
    catNameInfo : {
fontFamily : 'Poppins-Bold',
color : "#185574",


    },
    Amount : {
        fontFamily : 'Poppins-Regular',
        color : "#185574"
        
    },
    AmountInfo : {
        fontFamily : 'Poppins-Bold',
        color : "#185574",
        
        
    },payment :{
        fontFamily : 'Poppins-Regular',
        color : "#185574"
        
    },paymentInfo : {
        fontFamily : 'Poppins-Bold',
        color : "#185574",
        
        
    },
    addressContainer : {
        display : 'flex',
        flexDirection : 'row',
        padding : 10
    },
    AddTextContainer : {
        paddingHorizontal :10
    },
    textAdd : {
        fontFamily : 'Poppins-Bold',
        color : "#185574"
    },
    textBody : {
        fontFamily : 'Poppins-Regular',
        color : "#185574"
    },
    buttonContainer : {
        
        display : 'flex',
        flexDirection : 'row',
        paddingHorizontal : 5,
        justifyContent : 'center',
        alignItems : 'center'
    }

  });

export default OrderlistAR;
