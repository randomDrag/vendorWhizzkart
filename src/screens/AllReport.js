

import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

import {SafeAreaView, Text, View, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {monthlyReport} from '../actions';

const ReportCard = (props) => {
    return (
      <View style={style.CardRoot}>
        <Text style={style.textDownload}>{props.name} Report</Text>
        <FontAwesomeIcon
          style={style.icon}
          icon={faDownload}
          size={50}
          color="#AAAAAA"
        />
      </View>
    );
  }

class AllReport extends React.Component {

  
    componentDidMount(){
this.props.monthlyReport();
    }



  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#FFFFFF', height : "100%"}}>
       
       <FlatList data={this.props.data}  renderItem={(item) => {
           
           return <ReportCard name={item.item}/>
       }} />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  CardRoot: {
    height: 100,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textDownload: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    flex: 2,
  },
});

const mapStateToProps = (state) =>{
return { data : Object.keys(state.MonthlyReport)}
}

export default connect( mapStateToProps , {monthlyReport})(AllReport)
