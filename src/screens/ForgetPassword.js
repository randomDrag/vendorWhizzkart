import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/login_logout/Button.custom';
import LogoImage from '../components/login_logout/Logo.image';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import { faEye , faEyeSlash} from '@fortawesome/free-regular-svg-icons';


class ForgetPassword extends React.Component {

    constructor(props){
        super(props);
        this.OtpComponent = this.OtpComponent.bind(this);
        this.state = {
          isSecure: true,
          isKeyboardOpen: false,
        };
      this.newPassword = this.newPassword.bind(this);
         }

  ForgetScreen() {
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
            <LogoImage width={170} height={170} padding={3} />
          </View>

          <View style={style().card}>
            <Text style={style().loginText}>Forget Password</Text>

            <View>
              <CustomTextInput placeholder="Email or Mobile" />
            </View>
            <CustomButton title="Reset" />
          </View>
        </View>
      </SafeAreaView>
    );
  }


newPassword(){
  let isSecure = this.state.isSecure;
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
          <LogoImage width={170} height={170} padding={3} />
        </View>

        <View style={style().card}>
          <Text style={style().loginText}>Forget Password</Text>

          <View>
          <CustomTextInput
                placeholder="New Password"
            
                icon={isSecure == false ? faEye : faEyeSlash}
                secure={isSecure}
                onPress={() => {
                  isSecure == true
                    ? this.setState({isSecure: false})
                    : this.setState({isSecure: true});
               
                }}
              />
            <CustomTextInput
                placeholder="Confirm Password"
            

                icon={isSecure == false ? faEye : faEyeSlash}
                secure={isSecure}
                onPress={() => {
                  isSecure == true
                    ? this.setState({isSecure: false})
                    : this.setState({isSecure: true});
               
                }}
              />
          </View>
          <CustomButton title="Save" />
        </View>
      </View>
    </SafeAreaView>
  );
}


  OtpComponent() {

    const CELL_COUNT = 4;

  

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
            <LogoImage width={170} height={170} padding={3} />
          </View>

          <View style={style().card}>
            <Text style={style().loginText}>Verification</Text>

            <View>
       

      <CodeField
    
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
  
        cellCount={CELL_COUNT}
        rootStyle={style().codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[style().cell, isFocused && style().focusCell]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
<Text style={{


fontFamily : "Poppins-Regular",
textAlign : 'right',
paddingHorizontal : 25,
paddingBottom : 20,
fontSize : 18,
color: '#698C9E'


}}>Resend OTP</Text>


            </View>
            <CustomButton title="Send" />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  render() {
    return <this.newPassword/>;
  }
}

const style = flex =>
  StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins-Regular',
    },
    card: {
      marginTop: flex ? 15 : 5,
      width: '100%',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      padding: 20,
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
      fontSize: 25,
      fontWeight: '800',
      color: '#588094',
      width: '100%',
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
      marginBottom: 20,
    },





    root: {flex: 1, padding: 40},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20 , marginHorizontal : 20, marginVertical : 30},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },

  });

export default ForgetPassword;
