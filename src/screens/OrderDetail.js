import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
  Image
} from 'react-native';
import OrderDetailComp from '../components/OrderDetail.Comp';
import Orderlist from '../components/Orderlist';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../components/login_logout/Button.custom';

class OrderDetail extends React.Component {
  render() {
    let data = [
      {
        order: '#14454',
        time: 'oct 12 2021',
        date: '12:55pm',
        catName: 'chiken Wings',
        amt: '750',
        payment: 'online',
        address1: 'Usa Ncr',
        address2: 'loraem ishdi hsud aygds',
      },
      {
        order: '#148254',
        date: '12:55pm',
        time: 'oct 12 2021',
        catName: 'chiken Wings',
        amt: '750',
        payment: 'cod',
        address1: 'delhi Ncr',
        address2: 'loraem ishdi hsud aygds',
      },
      {
        order: '#144784',
        date: '12:55pm',
        time: 'oct 12 2021',
        catName: 'paneer',
        amt: '750',
        payment: 'cod',
        address1: 'delhi Ncr',
        address2: 'loraem ishdi hsud aygds',
      },
    ];
    return (
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        <ScrollView style={{marginVertical : 10}}>
        <View style={style().mainContainer}>
        <View style={style().imageContainer}>
          <Image style={style().image} source={require('../images/dish.png')} />
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

{/* Address  */}

<View style={style().addressContainer}>
    <FontAwesomeIcon icon={faMapMarkerAlt} color="#E84745"/>
<View style={style().AddTextContainer}>
<Text style={style().textAdd}>{this.props.addressTitle}</Text>
<Text style={style().textBody}>{this.props.addressBody}</Text>
</View>


         {/* Break Line */}
         <View
  style={{
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
    marginHorizontal : 15
  }}
/>


<View>

<Text>hello</Text>

</View>


</View>

{/* buttons */}

<View style={style().buttonContainer}>

<CustomButton width={150} title="Accept" marginHorizontal={10} backgroundColor="#185574"/>
<CustomButton width={150} title ="Reject"  marginHorizontal={10}/>


</View>

      </View>

            
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = () => StyleSheet.create({
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

export default OrderDetail;
