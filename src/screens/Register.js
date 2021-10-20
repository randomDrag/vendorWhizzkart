import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  ScrollView,
} from 'react-native';

import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
import CustomTextInput from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {faUser, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import TextLink from '../components/TextLink';
import {
  faEnvelope,
  faFileUpload,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import CustomUploadButton from '../components/CustomUploadButton';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSecure: true, isKeyboardOpen: false};
  }

  componentDidMount() {
    this.keybordOpen();
    this.keybordClose();
  }

  componentDidUpdate() {
    this.keybordOpen();
    this.keybordClose();
  }

  componentWillUnmount() {
    this.keybordOpen();
    this.keybordClose();
  }

  keybordOpen() {
    Keyboard.addListener('keyboardDidShow', () =>
      this.setState({isKeyboardOpen: true}),
    );
  }

  keybordClose() {
    Keyboard.addListener('keyboardDidHide', () =>
      this.setState({isKeyboardOpen: false}),
    );
  }

  render() {
    let isSecure = this.state.isSecure;
    let k = this.state.isKeyboardOpen;

    return (
      <SafeAreaView>
        <View style={style().container}>
          <View
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            {k ? null : <LogoImage width={170} height={170} padding={3} />}
          </View>

          <View style={style(k).card}>
            <Text style={style().loginText}>Create Account</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{height : "80%" , }} fadingEdgeLength = {50}>
              <View>
                <CustomTextInput
                  placeholder="Name"
                  icon={faUser}
                  autoComplete="username"
                />
                <CustomTextInput
                  placeholder="Email"
                  icon={faEnvelope}
                  autoComplete="email"
                />
                <CustomTextInput
                  placeholder="Mobile Number"
                  icon={faPhone}
                  autoComplete="tel"
                />
                <CustomTextInput
                  placeholder="Password"
                  icon={isSecure == false ? faEye : faEyeSlash}
                  secure={isSecure}
                  onPress={() => {
                    isSecure == true
                      ? this.setState({isSecure: false})
                      : this.setState({isSecure: true});
                    console.log(isSecure);
                  }}
                />
                <CustomTextInput
                  placeholder="Re-enter Password"
                  icon={isSecure == false ? faEye : faEyeSlash}
                  secure={isSecure}
                  onPress={() => {
                    isSecure == true
                      ? this.setState({isSecure: false})
                      : this.setState({isSecure: true});
                    console.log(isSecure);
                  }}
                />

                {/*  addess input */}

                <CustomTextInput
                  placeholder="Address"
                  icon={faMapMarkerAlt}
                  autoComplete="postal-address-extended-postal-code"
                />

                <CustomUploadButton
                  title="Gst Certificate"
                  icon={faFileUpload}
                />
                <CustomUploadButton title="Trade License" icon={faFileUpload} />
                <CustomUploadButton title="FSSI License" icon={faFileUpload} />
                <CustomUploadButton title="ID Proof" icon={faFileUpload} />
                <CustomUploadButton title="Address Proof" icon={faFileUpload} />
                <CustomUploadButton title="Cancelled Cheque" icon={faFileUpload} />
              </View>
              </ScrollView>
             <View style={{marginBottom : 15 , marginTop : 5}}>
              <CustomButton title="Register" />
              <View style={style().containerDoNotHave}>
              <Text style={style().donthaveaccount}>
                Already have an account? 
               </Text>
               <TextLink text="login" color="#E84F48" padding={0} />
               </View>
              </View>
             
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = flex =>
  StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      marginTop: flex ? 15 : 5,
      width: '100%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingTop: 10,
      paddingLeft : 15,
      paddingRight : 15,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignContent: 'center',
      display: 'flex',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    loginText: {
      fontSize: 30,
      fontWeight: '800',
      color: '#588094',
      width: '100%',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      marginBottom: 20,
    },
    
    containerDoNotHave :{
      display:'flex',
      flexDirection:'row',
  
      justifyContent:'center',
   
    },
    donthaveaccount: {
      textAlign: 'center',
    
      marginTop: 10,
      marginBottom:10,
      fontSize: 16,
     color : '#000',
      fontFamily: 'Poppins-Regular',
    },
  });

export default connect()(Register);
