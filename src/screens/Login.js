import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Keyboard} from 'react-native';
import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
import CustomTextInput from '../components/CustomTextInput';
import {connect} from 'react-redux';
import {faUser, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import TextLink from '../components/TextLink';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSecure: true, isKeyboardOpen: false};
  }

  componentDidMount(){

    this.keybordOpen();
    this.keybordClose();
    
  }

  componentDidUpdate(){

    this.keybordOpen();
    this.keybordClose();
  
  }

  componentWillUnmount(){
    this.keybordOpen();
    this.keybordClose();
  }

  keybordOpen(){

    Keyboard.addListener('keyboardDidShow' , ()=>this.setState({ isKeyboardOpen : true})

    )

  }

  
  keybordClose(){

    Keyboard.addListener('keyboardDidHide' , ()=> this.setState({ isKeyboardOpen : false})

    )

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
            <LogoImage width={170} height={170} padding={3} />
          </View>

          <View style={style(k).card}>
            <Text style={style().loginText}>Login</Text>
            <View>
              <CustomTextInput placeholder="Email or Mobile" icon={faUser} />
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
              <TextLink text="Forget Password?" textalign={'right'} padding={10} />
            </View>
            <CustomButton title="Sign in" />
            <Text style={style().donthaveaccount}>Don't have an account?{<TextLink text="Register" color="#ECBB60" padding={0}/>}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style =(flex) => StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: flex ? 10 : 4,
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
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#588094',
    width: '100%',
    fontFamily : 'Montserrat-Black',
    textAlign: 'center',
    marginBottom: 20,
  },
  donthaveaccount :{
    textAlign : "center",
    display : 'flex',
    flexDirection: 'row',
    margin : 5,
    fontSize :16,
    justifyContent :'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor : 'red',
    fontFamily : 'Montserrat'
  }
});

export default connect()(Login);
