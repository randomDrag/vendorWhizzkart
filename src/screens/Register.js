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
import RNFS from 'react-native-fs';
import {getRegister} from '../actions';
import validator from 'validator';
import ErrorModal from '../components/ErrorModal';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSecure: true, isKeyboardOpen: false,
    name: '',
    email : '',
    mobile: '',
    password : '',
    confirmPassword : '',
    address : '',
    gst : null,
    Trade : null,
    IDproof : null,
    FSSI : null,
    AddProof : null,
    CancelCheque : null,
    error: '',
    isloading: false,
    isError : false
    

    
    };
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


  test(v){
    // console.log("from main " + v);
    // axios.post('gs://onesignal-c50fa.appspot.com')
  }

async submit(){
  this.setState({isloading : true});
  const {name , email , password , confirmPassword , address,mobile,Trade ,FSSI , CancelCheque , gst ,IDproof,AddProof} = this.state;

  if(password == confirmPassword && validator.isEmail(email) && validator.isMobilePhone("+91"+ mobile) && address != null && gst !=null  ){

    const trade = await RNFS.readFile(Trade.uri,'base64');
    const CC = await RNFS.readFile(CancelCheque.uri , 'base64')
    const fssi = await RNFS.readFile(FSSI.uri , 'base64')
    const gstC = await RNFS.readFile(gst.uri , 'base64');
    const Id = await RNFS.readFile(IDproof.uri, 'base64');
   const add = await RNFS.readFile(AddProof.uri, 'base64');
   
  
    let data = {
      name ,
      email,
      mobile,
      password,
      user_type :4,
      vendor : JSON.stringify({
        
         trade_license :trade,
         cancelled_cheque : CC ,
         fssi_license : fssi,
         address_proof :add ,
         id_proof :  Id,
         gst_certificate : gstC,
         Address : address
      })
    }
    
    this.props.getRegister(data ,()=> {
    
    this.props.navigation.navigate('Login')
    this.setState({isloading : false})
    }
    );
   


  }else if (password !== confirmPassword){

    this.setState({isloading : false});
    this.setState({isError : true,
      error : "Password not match"});
  }
  
  
  else{
    
    this.setState({isloading : false});
    this.setState({isError : true,
      error : "All Fields Requried"});
  }
}


  render() {
    let isSecure = this.state.isSecure;
    let k = this.state.isKeyboardOpen;

    return (
      <SafeAreaView>
        <ErrorModal
          msg={this.state.error}
          isVisible={this.state.isError}
          onPress={() => this.setState({isError: false}) }
        />

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
            <Text allowFontScaling={false} style={style().loginText}>Create Account</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{height : "80%" , }} fadingEdgeLength = {50}>
              <View>
                <CustomTextInput
                  placeholder="Name"
                  icon={faUser}
                  autoComplete="username"
                  onChangeText={(e)=> this.setState({ name :e})}
                  defaultValue={this.state.name}
                />
                <CustomTextInput
                  placeholder="Email"
                  icon={faEnvelope}
                  autoComplete="email"
                  onChangeText={(e) =>this.setState({ email :e})}
                  defaultValue={this.state.email}
                />
                <CustomTextInput
                  placeholder="Mobile Number"
                  icon={faPhone}
                  autoComplete="tel"
                  onChangeText={(e) =>this.setState({ mobile :e})}
                  defaultValue={this.state.mobile}
                />
                <CustomTextInput
                  placeholder="Password"
                  icon={isSecure == false ? faEye : faEyeSlash}
                  secure={isSecure}
                  onPress={() => {
                    isSecure == true
                      ? this.setState({isSecure: false})
                      : this.setState({isSecure: true});
                   
                  }}
                  onChangeText={(e) => this.setState({password : e})}
                  defaultValue={this.state.password}
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
                  onChangeText={(e) =>this.setState({ confirmPassword :e})}
                  defaultValue={this.state.confirmPassword}
                />

                {/*  addess input */}

                <CustomTextInput
                  placeholder="Address"
                  icon={faMapMarkerAlt}
                  autoComplete="postal-address-extended-postal-code"
                  onChangeText={(e) =>this.setState({address : e})}
                  defaultValue={this.state.address}
                />

                <CustomUploadButton
                  title="Gst Certificate"
                  icon={faFileUpload}
                  value={ (v) => this.setState({gst : v})}
                />
                <CustomUploadButton title="Trade License" icon={faFileUpload} value={ (v) => this.setState({Trade : v})}/>
                <CustomUploadButton title="FSSI License" icon={faFileUpload} value={v => this.setState({ FSSI :v})} />
                <CustomUploadButton title="ID Proof" icon={faFileUpload} value={v => this.setState({IDproof :v})} />
                <CustomUploadButton title="Address Proof" icon={faFileUpload} value={v => this.setState({ AddProof :v})} />
                <CustomUploadButton title="Cancelled Cheque" icon={faFileUpload} value={v => this.setState({ CancelCheque :v})} />
              </View>
              </ScrollView>
             <View style={{marginBottom : 15 , marginTop : 5}}>
              <CustomButton   title={this.state.isloading ? 'Loading' : 'Register'}
              color={this.state.isloading ? '#000000' : '#FFF'}
              backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'} onPress={()=> this.submit()} />
              <View style={style().containerDoNotHave}>
              <Text allowFontScaling={false} style={style().donthaveaccount}>
                Already have an account? 
               </Text>
               <TextLink text="login" color="#E84F48" padding={0} onPress={()=> this.props.navigation.navigate('Login')}/>
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

export default connect(null, {getRegister})(Register);
