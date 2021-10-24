import React from 'react';
import {Text, SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import DashboardCard from '../components/DashboardCard';

class Dashboard extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor : "#FFFFFF"}}>
        <ScrollView >
          <View style={style().ReportCard}>
            <View style={style().ReportInfo}>
                <Text style={style().Month}>This Month</Text>
                <TouchableOpacity>
                <Text style={style().AllReport}>All Report</Text>
                </TouchableOpacity>
             
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <DashboardCard
                title="Today Order"
                orders="256"
                growth="10"
                image={require('../images/order-food.png')}
                dishImage={require('../images/dish.png')}
              />
              <DashboardCard
                title="All Orders"
                orders="256"
                growth="10"
                image={require('../images/sent.png')}
                dishImage={require('../images/dish.png')}
              />
            
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <DashboardCard
                title="Today Earning"
                orders="256"
                growth="10"
                image={require('../images/money1.png')}
                dishImage={require('../images/dish.png')}
              />
              <DashboardCard
                title="Total Earning"
                orders="256"
                growth="10"
                image={require('../images/money2.png')}
                dishImage={require('../images/dish.png')}
              />
            
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = () => StyleSheet.create({

    ReportCard : {
        marginVertical : 10,
        padding : 5
    },
    ReportInfo :{
        display : 'flex',
        flexDirection : 'row',
        flex : 1
    },
    Month : {
 
        fontFamily : 'Poppins-Bold',
        fontSize : 18,
        color : '#165675',
        paddingHorizontal : 6,
        flex  : 1
        
    },
    AllReport : {
        justifyContent : 'flex-end',
        fontFamily : 'Poppins-Regular',
        fontSize : 18,
        flex:1,
        paddingHorizontal : 6
    }
});

export default Dashboard;
