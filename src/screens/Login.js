import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Keyboard} from 'react-native';
import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
import CustomTextInput from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {faUser, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import TextLink from '../components/TextLink';
import ErrorModal from '../components/ErrorModal';

import {LoginForm , Auth , ErrorClose} from '../actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecure: true,
      isKeyboardOpen: false,
      isLoading : false,
      isVisible : false
    };

    this.loginFormInput = this.loginFormInput.bind(this);
    this. loginFormInputPassword = this. loginFormInputPassword.bind(this);
    this.submit = this.submit.bind(this);
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

  loginFormInput(e) {
  this.props.LoginForm(e,this.props.loginInput.password)
  }
  loginFormInputPassword(e){

    this.props.LoginForm(this.props.loginInput.username,e);
  }



  submit(){
   this.setState({isLoading : true});
      const {username , Password}= this.props.loginInput;


     this.props.Auth(username ,Password ,()=> this.setState({isLoading : false}) );

    
  }

  render() {
    let isSecure = this.state.isSecure;
    let k = this.state.isKeyboardOpen;

    

    return (

      

      <SafeAreaView>
        <View style={style().container}>
          <ErrorModal  msg={this.props.isError.error} isVisible={this.props.isError.visible} onPress={()=> this.props.ErrorClose()} />
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
            <Text allowFontScaling={false} style={style().loginText}>Login</Text>
            <View>
              <CustomTextInput placeholder="Email or Mobile" icon={faUser}    onChangeText={(e)=> this.loginFormInput(e)} defaultValue={this.props.loginInput.username}/>
              <CustomTextInput
                placeholder="Password"
                onChangeText={(e)=> this.loginFormInputPassword(e)}
                defaultValue={this.props.loginInput.password}

                icon={isSecure == false ? faEye : faEyeSlash}
                secure={isSecure}
                onPress={() => {
                  isSecure == true
                    ? this.setState({isSecure: false})
                    : this.setState({isSecure: true});
               
                }}
              />
              <Text allowFontScaling={false}Link
                text="Forgot Password?"
                textalign={'right'}
                padding={10}
                alignItem={'flex-end'}
                onPress={() => this.props.navigation.navigate('ForgetPassword')}
              />
            </View>
            <CustomButton title={this.state.isLoading ? "Please wait" :"Sign in"} onPress={this.submit} />
            <View style={style().RegisterLinkContainer}>
              <Text allowFontScaling={false} style={style().donthaveaccount}>
                Don't have an account?
              </Text>
              <Text allowFontScaling={false}Link
                text="Register"
                color="#ECBB60"
                padding={0}
                onPress={() => this.props.navigation.navigate('Register')}
              />
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
      shadowOffset: {
        width: 0,
        height: 2,
      },
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
    RegisterLinkContainer: {
      display: 'flex',
      flexDirection: 'row',

      justifyContent: 'center',
    },
    donthaveaccount: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      margin: 5,
      fontSize: 16,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 2,
      // borderColor : 'red',
      fontFamily: 'Poppins-Regular',
      color: '#000',
    },
  });

const mapStateToProps = state => {
  return {loginInput: state.LoginForm,
          isError : state.Login};
};

export default connect(mapStateToProps, {LoginForm , Auth , ErrorClose})(Login);
