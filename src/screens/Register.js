import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import LogoImage from '../components/login_logout/Logo.image';
import CustomButton from '../components/login_logout/Button.custom';
import CustomTextInput from '../components/CustomTextInput';
import {connect} from 'react-redux';
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
import {Field, reduxForm} from 'redux-form';
import CustomButtonNoIcon from '../components/CustomButtonNoIcon';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecure: true,
      isKeyboardOpen: false,
      gst: null,
      Trade: null,
      IDproof: null,
      FSSI: null,
      AddProof: null,
      CancelCheque: null,
      error: '',
      isloading: false,
      isError: false,
    };

    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    this.KeyBoardOpen();
    this.KeyBoardClose();
  }

  KeyBoardOpen() {
    Keyboard.addListener('keyboardDidShow', () =>
      this.setState({isKeyboardOpen: true}),
    );
  }

  KeyBoardClose() {
    Keyboard.addListener('keyboardDidHide', () =>
      this.setState({isKeyboardOpen: false}),
    );
  }



  async onSubmit(values) {

    const {Name , Email , Password , MobileNumber , Address} = values;
    this.setState({isloading: true});
    const {
      Trade,
      FSSI,
      CancelCheque,
      gst,
      IDproof,
      AddProof,
    } = this.state;

    if (
      gst != null
    ) {
      const trade = await RNFS.readFile(Trade.uri, 'base64');
      const CC = await RNFS.readFile(CancelCheque.uri, 'base64');
      const fssi = await RNFS.readFile(FSSI.uri, 'base64');
      const gstC = await RNFS.readFile(gst.uri, 'base64');
      const Id = await RNFS.readFile(IDproof.uri, 'base64');
      const add = await RNFS.readFile(AddProof.uri, 'base64');

      let data = {
        name : Name,
        email : Email,
        mobile : MobileNumber,
        password : Password,
        user_type: 4,
        vendor: JSON.stringify({
          trade_license: trade,
          cancelled_cheque: CC,
          fssi_license: fssi,
          address_proof: add,
          id_proof: Id,
          gst_certificate: gstC,
          Address: Address,
        }),
      };

     


      this.props.getRegister(data, (e) => {


        if(e == 200){

       Alert.alert('Successful ', 'your application is submitted',[{
         text : 'OK',
         onPress :() => this.props.navigation.navigate('Login')
       }])
       
        this.setState({isloading: false});
      }else{

        Alert.alert('Error ', e)
        
         this.setState({isloading: false});


      }



      });
    

    } else if (password !== confirmPassword) {
      this.setState({isloading: false});
      this.setState({isError: true, error: 'Password not match'});
    } else {
      this.setState({isloading: false});
      this.setState({isError: true, error: 'All Fields Requried'});
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
          onPress={() => this.setState({isError: false})}
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
            <Text allowFontScaling={false} style={style().loginText}>
              Create Account
            </Text>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: '80%'}}
              fadingEdgeLength={50}>
              <View>
                {/* NAME ............................................................. */}
                <Field
                  placeholder="Name"
                  name="Name"
                  icon='person'
                  autoComplete="username"
                  component={CustomTextInput}
                />

                {/* EMAIL................................................................ */}

                <Field
                  placeholder="Email"
                  name="Email"
                  icon='mail'
                  autoComplete="email"
                  component={CustomTextInput}
                />

                {/* MOBILE NUMBER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Field
                  placeholder="Mobile Number"
                  name={'MobileNumber'}
                  icon={'call-sharp'}
                  component={CustomTextInput}
                  autoComplete="tel"
                />

                {/* PASSWORD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Field
                  placeholder="Password"
                  name="Password"
                  icon={isSecure == false ? 'eye' : 'eye-off'}
                  secure={isSecure}
                  component={CustomTextInput}
                  onPress={() => {
                    isSecure == true
                      ? this.setState({isSecure: false})
                      : this.setState({isSecure: true});
                  }}
                />

                {/* COM_PASSWORD>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Field
                  placeholder="Confirm Password"
                  name="PasswordConfirm"
                  icon={isSecure == false ? 'eye' : 'eye-off'}
                  secure={isSecure}
                  component={CustomTextInput}
                  onPress={() => {
                    isSecure == true
                      ? this.setState({isSecure: false})
                      : this.setState({isSecure: true});
                  }}
                />

                {/*  ADDRESS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                <Field
                  placeholder="Address"
                  name="Address"
                  icon={'locate'}
                  component={CustomTextInput}
                />

                <CustomUploadButton
                  title="Gst Certificate"
                  icon={faFileUpload}
                  value={v => this.setState({gst: v})}
                />
                <CustomUploadButton
                  title="Trade License"
                  icon={faFileUpload}
                  value={v => this.setState({Trade: v})}
                />
                <CustomUploadButton
                  title="FSSI License"
                  icon={faFileUpload}
                  value={v => this.setState({FSSI: v})}
                />
                <CustomUploadButton
                  title="ID Proof"
                  icon={faFileUpload}
                  value={v => this.setState({IDproof: v})}
                />
                <CustomUploadButton
                  title="Address Proof"
                  icon={faFileUpload}
                  value={v => this.setState({AddProof: v})}
                />
                <CustomUploadButton
                  title="Cancelled Cheque"
                  icon={faFileUpload}
                  value={v => this.setState({CancelCheque: v})}
                />
              </View>
            </ScrollView>
            <View style={{marginBottom: 15, marginTop: 5 , justifyContent : 'center' , alignItems : 'center'}}>
              <CustomButtonNoIcon
       //      width={250}
                title={this.state.isloading ? 'Loading' : 'Register'}
                color={this.state.isloading ? '#000000' : '#FFF'}
                backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'}
                onPress={this.props.handleSubmit(this.onSubmit)}
              />
              <View style={style().containerDoNotHave}>
                <Text allowFontScaling={false} style={style().donthaveaccount}>
                  Already have an account?
                </Text>
                <TextLink
                  text="login"
                  color="#E84F48"
                  padding={0}
                  onPress={() => this.props.navigation.navigate('Login')}
                />
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
      paddingLeft: 15,
      paddingRight: 15,
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

    containerDoNotHave: {
      display: 'flex',
      flexDirection: 'row',

      justifyContent: 'center',
    },
    donthaveaccount: {
      textAlign: 'center',

      marginTop: 10,
      marginBottom: 10,
      fontSize: 14,
      color: '#000',
      fontFamily: 'Poppins-Regular',
    },
  });

const validate = values => {
  let errors = {};

  if (!values.Email) {
    errors.Email = 'Required';
  } else if (!validator.isEmail(values.Email)) {
    errors.Email = 'Invalid email address';
  }

  if (!values.Name) {
    errors.Name = 'Required';
  }

  if (!values.MobileNumber) {
    errors.MobileNumber = 'Required';

  }else if(!validator.isMobilePhone('+91' + Number(values.MobileNumber))){
    errors.MobileNumber = 'Invalid Mobile number ';
  }

  if (!values.Password) {
    errors.Password = 'Required';
  }

  if (!values.PasswordConfirm) {
    errors.PasswordConfirm = 'Required';
  }
  if(!values.Password == values.PasswordConfirm){
    errors.PasswordConfirm = 'Password not match';
    errors.Password = 'Password not match';
  }

  if (!values.Address) {
    errors.Address = 'Required';
  }
  // else if ( Number( values.Password) < 8) {
  //   errors.Password = 'must be strong password';
  // }

  return errors;
};

export default reduxForm({
  form: 'Register',
  validate: validate,
})(connect(null, {getRegister})(Register));
