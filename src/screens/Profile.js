import {thisExpression} from '@babel/types';
import {faPeopleArrows} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getProfile} from '../actions';

class Profile extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  card(props) {
    return (
      <View style={style.CardContainer}>
        <Text style={style.TitleText}>{props.title}</Text>
        <Text style={style.BodyText}>{props.name}</Text>
      </View>
    );
  }

  render() {
    const {profile} = this.props;

    return (
      <SafeAreaView style={style.root}>
        <ScrollView>
          <this.card title="Name" name={profile.name} />
          <this.card title="Email" name={profile.email} />
          <this.card title="Mobile No" name={profile.mobile} />
          {/* <this.card title="Address" name={typeof profile.vendor.address == ('undefined'|| 'null')  ? ' ' : profile.vendor.address } /> */}
          {/* <this.card title="gst certificate" name={profile.vendor.gst_certificate} />
          <this.card title="trade license" name={profile.vendor.trade_license} />
          <this.card title="id proof" name={profile.vendor.id_proof} />
          <this.card title="fssi license" name={profile.vendor.fssi_license} />
          <this.card title="address proof" name={profile.vendor.address_proof} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  CardContainer: {
    //   borderColor : 'red',
    //   borderWidth : 2,
    margin: 7,
    minHeight: 80,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F5F5F5',
    elevation: 5,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  TitleText: {
    flex: 1,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
    color : '#000',

    textAlign: 'center',
  },
  BodyText: {
    flex: 3,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
    color : '#000'
  },
});

const mapStateToProps = state => {
  return {profile: state.GetProfile};
};

export default connect(mapStateToProps, {getProfile})(Profile);
