import React from "react";
import {Text, SafeAreaView, View, ScrollView ,StyleSheet} from 'react-native'
import DashboardCard from "../components/DashboardCard";

class Dashboard extends React.Component {


    render() {
        return <SafeAreaView>

            <ScrollView>
                <View style={{display : 'flex' , flexDirection:'row'}}>
                    <DashboardCard title="Today Order" orders="256" growth="10"  image={require('../images/order-food.png')} dishImage={require('../images/dish.png')}/>
                    <DashboardCard title="All Orders" orders="256" growth="10"  image={require('../images/sent.png')} dishImage={require('../images/dish.png')}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    }

}

const style  = ()=> StyleSheet.create({



});

export default Dashboard;
