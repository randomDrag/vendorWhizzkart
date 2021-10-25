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
import Orderlist from '../components/Orderlist';

class TodayOrder extends React.Component {
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
        <FlatList
          data={data}
          keyExtractor={data.order}
          renderItem={item => {
            return (
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('FirstScreen', {
                screen : 'FirstScreen'
              })}>
                <Orderlist
                  OrderId={item.item.order}
                  Date={item.item.time}
                  time={item.item.date}
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

export default TodayOrder;
