import React from 'react';
import {Text, SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import { connect } from 'react-redux';
import DashboardCard from '../components/DashboardCard';
import {DashboardInfo , getGraphData} from '../actions'
import {VictoryChart , VictoryBar , VictoryTheme} from 'victory-native'





class Dashboard extends React.Component {


  componentDidMount(){
    this.props.getGraphData();
    this.props.DashboardInfo();
   
  }

  render() {
    const {graph} = this.props;
    const dataGraph = graph.cordinate;
   console.log(dataGraph);
    return (
      <SafeAreaView style={{backgroundColor : "#FFFFFF"}}>
        <ScrollView >
          <View style={style().ReportCard}>
            <View style={style().ReportInfo}>
                <Text style={style().Month}>This Month</Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('All Report')}>
                <Text style={style().AllReport}>All Report</Text>
                </TouchableOpacity>
             
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <DashboardCard
                title="Today Order"
                orders={ typeof this.props.dashboard.today.total_order == ('undefined'||'null')  ? "loading" : this.props.dashboard.today.total_order }
                growth={this.props.dashboard.today.current_today_order_growth }
                image={require('../images/order-food.png')}
                dishImage={require('../images/dish.png')}
              />
              <DashboardCard
                title="All Orders"
                orders={ typeof this.props.dashboard.monthly.total_order == ('undefined'||'null') ? "loading" : this.props.dashboard.monthly.total_order}
                growth={this.props.dashboard.monthly.current_month_order_growth}
                image={require('../images/sent.png')}
                dishImage={require('../images/dish.png')}
              />
            
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <DashboardCard
                title="Today Earning"
                orders={ typeof this.props.dashboard.today.total_earning == ('undefined'||'null') ? "loading" : this.props.dashboard.today.total_earning }
                growth={this.props.dashboard.today.current_today_earning_growth}
                image={require('../images/money1.png')}
                dishImage={require('../images/dish.png')}
              />
              <DashboardCard
                title="Total Earning"
                orders={ typeof this.props.dashboard.monthly.total_earning == ('undefined'||'null') ? "loading" : this.props.dashboard.monthly.total_earning }
                growth={this.props.dashboard.monthly.current_month_earning_growth}
                image={require('../images/money2.png')}
                dishImage={require('../images/dish.png')}
              />
            
            </View>

          
          </View>

          <View style={{padding : 10 , margin : 5}}>
         
         

             <VictoryBar cornerRadius={{top : 10}} animate style={{data : {fill : "#EA6566"}}} data={dataGraph}  /> 
        
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

const mapStateToProps = (state) =>{

  return { dashboard : state.DashboardInfo,
  graph : state.getGraphdata}

}

export default connect( mapStateToProps , {DashboardInfo , getGraphData})(Dashboard);
