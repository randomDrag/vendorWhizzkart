import React from 'react';

import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/login_logout/Button.custom';
import LogoImage from '../components/login_logout/Logo.image';
import validator from 'validator';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

import {connect} from 'react-redux';
import {
  ForgetPasswordUserName,
  ForgetPasswordErrorClose,
  VerifyOtpFp,
  IsValidOtp,
  UpdatePassword,
} from '../actions';
import ErrorModal from '../components/ErrorModal';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.OtpComponent = this.OtpComponent.bind(this);
    this.state = {
      isSecure: true,
      isKeyboardOpen: false,
      Otp: '',
      UserName: '',
      NewPassword: '',
      ConfirmPassword: '',
      error: '',
      typeSwitch: 1,
      isloading: false,
    };
    this.newPassword = this.newPassword.bind(this);
    this.ForgetScreen = this.ForgetScreen.bind(this);
    this.OtpComponent = this.OtpComponent.bind(this);
  }

  forgetpasswodField(e) {
    if (validator.isEmail(e) || validator.isMobilePhone('+91' + e)) {
      this.setState({UserName: e});
      this.setState({error: ''});
    } else {
      this.setState({error: 'Enter valid email or number'});
    }
  }

  usernameSubmit() {
    this.setState({isloading: true});
    this.props.ForgetPasswordUserName(this.state.UserName, () => {
      this.setState({typeSwitch: 2});

      this.setState({isloading: false});
    });
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
            <Text allowFontScaling={false} style={style().loginText}>Forget Password</Text>

            <View>
              <CustomTextInput
                placeholder="Email or Mobile"
                onChangeText={e => this.forgetpasswodField(e)}
                defaultValue={this.state.UserName}
                error={this.state.error}
              />
            </View>
            <CustomButton
              title={this.state.isloading ? 'Loading' : 'Reset'}
              color={this.state.isloading ? '#000000' : '#FFF'}
              backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'}
              onPress={() => this.usernameSubmit()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  newPasswordFields(e) {
    this.setState({NewPassword: e});
  }

  confimPasswordFields(e) {
    this.setState({ConfirmPassword: e});
  }

  saveNewPassword() {
    if (this.state.NewPassword == this.state.ConfirmPassword) {
      this.setState({isloading: true});
      this.setState({error: ''});
      this.props.UpdatePassword(
        this.props.usernameData.username,
        this.state.ConfirmPassword, () =>{
          this.setState({typeSwitch: 1});
          this.setState({isloading: false});
          this.props.navigation.navigate('Login');
        }
      );
     
    } else {
      this.setState({error: 'Password not match'});
      this.setState({isloading: false});
    }
  }

  newPassword() {
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
            <Text allowFontScaling={false} style={style().loginText}>Forget Password</Text>

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
                onChangeText={e => this.newPasswordFields(e)}
                defaultValue={this.state.NewPassword}
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
                onChangeText={e => this.confimPasswordFields(e)}
                defaultValue={this.state.ConfirmPassword}
                error={this.state.error}
              />
            </View>
            <CustomButton title={this.state.isloading ? 'Loading' : 'Save'}
              color={this.state.isloading ? '#000000' : '#FFF'}
              backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'} onPress={() => this.saveNewPassword()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  OtpSubmit() {
    this.setState({isloading: true});
    if (!validator.isEmpty(this.state.Otp)) {
      this.props.VerifyOtpFp(
        this.props.usernameData.username,
        this.state.Otp,
        () => {
          this.setState({typeSwitch: 3});
          this.setState({isloading: false});
        },
      );
    }
  }

  OtpComponent() {
    const CELL_COUNT = 4;

    console.log(this.state.Otp);

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
            <Text allowFontScaling={false} style={style().loginText}>Verification</Text>

            <View>
              <CodeField
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                
                onChangeText={e => this.setState({Otp: e})}
                value={this.state.Otp}
                cellCount={CELL_COUNT}
                rootStyle={style().codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text allowFontScaling={false}
                    key={index}
                    style={[style().cell, isFocused && style().focusCell]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.ForgetPasswordUserName(
                    this.props.usernameData.username,
                  )
                }>
                <Text allowFontScaling={false}
                  style={{
                    fontFamily: 'Poppins-Regular',
                    textAlign: 'right',
                    paddingHorizontal: 25,
                    paddingBottom: 20,
                    fontSize: 18,
                    color: '#698C9E',
                  }}>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title={this.state.isloading ? 'Loading' : 'Submit'}
              color={this.state.isloading ? '#000000' : '#FFF'}
              backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'}
              onPress={() => this.OtpSubmit()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  renderPage(data) {
    switch (data) {
      case 1:
        return <this.ForgetScreen />;

      case 2:
        return <this.OtpComponent />;

      case 3:
        return <this.newPassword />;

      default:
        return <this.ForgetScreen />;
    }
  }

  render() {
    return (
      <View>
        <ErrorModal
          msg={this.props.usernameData.msg}
          isVisible={this.props.usernameData.register == 'true' ? false : true}
          onPress={() => {
            return this.props.ForgetPasswordErrorClose(() =>
              this.setState({isloading: false}),
            );
          }}
        />
        <ErrorModal
          msg={this.props.Otpdata.msg}
          isVisible={this.props.Otpdata.isvalid ? false : true}
          onPress={() =>
            this.props.IsValidOtp(() => {
              this.setState({isloading: false});
            })
          }
        />
        {this.renderPage(this.state.typeSwitch)}
        {/* <this.newPassword /> */}
      </View>
    );
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
    codeFieldRoot: {marginTop: 20, marginHorizontal: 20, marginVertical: 30},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      // borderColor: '#00000030',
      color : '#000000',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
  });

const mapStateToProps = state => {
  return {usernameData: state.ForgetPassword, Otpdata: state.VerifyOtp};
};

export default connect(mapStateToProps, {
  ForgetPasswordUserName,
  ForgetPasswordErrorClose,
  VerifyOtpFp,
  IsValidOtp,
  UpdatePassword,
})(ForgetPassword);
