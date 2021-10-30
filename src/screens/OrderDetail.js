import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {getOrderDetails , AcceptOrder , RejectOrder} from '../actions';
import OrderDetailComp from '../components/OrderDetail.Comp';


class OrderDetail extends React.Component {
  componentDidMount() {
    const {orderId} = this.props.route.params;
    this.props.getOrderDetails(orderId);
  }

  containerItem(props) {
    return (
      <View style={style().ItemContainer}>
        <Image
          style={style().itemImage}
          source={{uri : props.image}}
        />
        <Text style={{flex: 3, fontFamily: 'Poppins-Bold', color: '#185574'}}>
        {props.title}
        </Text>
        <Text style={{flex: 1, fontFamily: 'Poppins-Bold', color: '#185574'}}>
          {<Text style={{color: '#E85555'}}>&#8377;</Text>}
          {props.price}
        </Text>
      </View>
    );
  }

  render() {
    const {order} = this.props;
    const d = order.order_date;
    const time = d.split(' ');
    const fullAdd = ` ${
      order.location.house_no ? '' : order.location.house_no
    } ${order.location.area} ${order.location.landmark} ${
      order.location.city
    } ${order.location.pincode}`;
    return (
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
        <ScrollView style={{marginVertical: 10, height: '100%'}}>
          <OrderDetailComp
            OrderId={order.order_id}
            date={time[0]}
            time={time[1]}
            payment={order.payment_method.name}
            addressBody={fullAdd}
            addressTitle={order.location.area}
            price={order.total_payble_amount}
            isButton={true}
            accept ={()=> this.props.AcceptOrder('Accepted',order.order_id ,()=>{
              this.props.navigation.navigate('Dashboard',{
                screen : 'Orders'
              }); 
            })}
            reject={() => this.props.RejectOrder('Rejected',order.order_id , ()=>{
              this.props.navigation.navigate('Dashboard',{
                screen : 'Orders'
              }); 
            })}
            render={order.order_details.map(item => {
            return (
              <View key={item.id}>
                <this.containerItem title={item.vendor_product.product_details.category.name} price={item.price} image={item.vendor_product.product_details.primaryimages.imagePath}/>
                </View>
            )
            
            })}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = () =>
  StyleSheet.create({
    ItemContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginVertical: 5,
    },
    itemImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      flex: 2,
    },
  });

const mapStateToProps = state => {
  return {order: state.GetOrderInfo};
};

export default connect(mapStateToProps, {getOrderDetails , AcceptOrder ,RejectOrder})(OrderDetail);
