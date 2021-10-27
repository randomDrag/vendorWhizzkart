import React from 'react';
import {WebView } from 'react-native-webview';
import {Text, View, StyleSheet, SafeAreaView, ScrollView , Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {PrivacyPolicy as p} from '../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class PrivacyPolicy extends React.Component {

    componentDidMount(){
        this.props.p();
    }


  render() {

    const str = this.props.data;

    return (
      <SafeAreaView style={style().root}>
        <View style={{height :'100%'}}>
          <WebView style={style().webview}  originWhitelist={['*']} scalesPageToFit={true} source={ {html :  `'<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>
          ${str}
          <style>
    body { font-size: 14px; word-wrap: break-word; overflow-wrap: break-word; padding : 0; margin: 0; }
</style>
          </body></html>'`}}/>

          
        </View>
      </SafeAreaView>
    );
  }
}
const style = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },webview :{
      height : deviceHeight,
      width : deviceWidth,
    
    }
  });

const mapStateToProps = (state) =>{

    return { data : state.privacy}
}

export default connect(mapStateToProps, {p})( PrivacyPolicy);
