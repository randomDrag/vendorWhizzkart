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
} from 'react-native';
import { connect } from 'react-redux';

import {RejectOrderList} from '../actions';
import OrderlistAR from '../components/OrderlistAR';

class OrderRejectedProduct extends React.Component {


  componentDidMount(){

   this.props.RejectOrderList();

  }

  render() {
  

    const { data } = this.props;
  
    return (

     

      <SafeAreaView style={{backgroundColor: '#FFFFFF', height : '100%'}}>
        <FlatList
          data={data}
          keyExtractor={data.order_id}
          renderItem={item => {
            const d = item.item.order_date;
            const time = d.split(' ');
            
            const fullAdd = ` ${item.item.location.house_no  ? ''  : item.item.location.house_no } ${item.item.location.area} ${item.item.location.landmark} ${item.item.location.city} ${item.item.location.pincode}`
            return (
              <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('ProductDetails', {orderId : item.item.order_id ,status : "Rejected"})}>
                <OrderlistAR
                  OrderId={item.item.order_id}
                  Date={time[0]}
                  time={time[1]}
                  Amount={item.item.total_payble_amount}
                  payment={item.item.payment_method.name}
                  Name={item.item.order_details[0].vendor_product.product_details.category.name}
                  image={item.item.order_details[0].vendor_product.product_details.primaryimages.imagePath}
                  addressTitle={item.item.location.area}
                  addressBody={fullAdd}
                  status="Rejected"
                
                />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const style = () => StyleSheet.create({});

const mapStateToProps = (state) =>{

  return {data : Object.values( state.RejectOrderList) }
}

export default connect(mapStateToProps , {RejectOrderList})(OrderRejectedProduct);