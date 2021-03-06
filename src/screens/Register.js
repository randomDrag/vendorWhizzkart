import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform
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
import CheckBox from '@react-native-community/checkbox';
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
      profile: null,
      error: '',
      isloading: false,
      isError: false,
      TermAndCondition: false,
     
        Errorgst : false,
        Errorprofile : false ,
        Errorfassi : false,
        Errortrade : false,
        ErroridProof : false,
        Erroraddproof : false,
        ErrorCancelCheque : false
      }
    

    this.onSubmit = this.onSubmit.bind(this);
  }




  async onSubmit(values) {
    const {Name, Email, Password, MobileNumber, Address} = values;
   
    const {Trade, FSSI, CancelCheque, gst, IDproof, AddProof, profile} =this.state;

    if (gst == null) {

      this.setState({Errorgst : true });

      console.log(this.state.Errorgst);
    }

    if(Trade == null){

      this.setState({Errortrade : true });

    }

    

    if (IDproof == null) {
      this.setState({ErroridProof : true });
    }

    if (AddProof == null) {
      this.setState({Erroraddproof : true });
    }

    if (profile == null) {
      this.setState({Errorprofile : true });
    }

    if (CancelCheque == null) {
      this.setState({ErrorCancelCheque: true });
    }

    if(FSSI == null){
      this.setState({Errorfassi: true });
    }

    if (
      (IDproof != null) &&
      (AddProof != null) &&
      (profile != null) &&
      (CancelCheque != null)&& (AddProof != null) && (FSSI != null)
    ) {
      // const trade = await RNFS.readFile(Trade.uri, 'base64');
      // const CC = await RNFS.readFile(CancelCheque.uri, 'base64');
      // const fssi = await RNFS.readFile(FSSI.uri, 'base64');
      // const gstC = await RNFS.readFile(gst.uri, 'base64');
      // const Id = await RNFS.readFile(IDproof.uri, 'base64');
      // const add = await RNFS.readFile(AddProof.uri, 'base64');

      this.setState({isloading: true});

      let data = {
        name: Name,
        email: Email,
        mobile: MobileNumber,
        password: Password,
        user_type: 4,
        vendor: JSON.stringify({
          image: profile,
          trade_license: Trade,
          cancelled_cheque: CancelCheque,
          fssi_license: FSSI,
          address_proof: AddProof,
          id_proof: IDproof,
          gst_certificate: gst,
          address: Address,
        }),
      };

      this.props.getRegister(data, e => {
        if (e == 200) {
          Alert.alert('Successful ', 'your application is submitted', [
            {
              text: 'OK',
              onPress: () => this.props.navigation.navigate('Login'),
            },
          ]);

          this.setState({isloading: false});
        } else {
          Alert.alert('Error ', e);

          this.setState({isloading: false});
        }
      });

    }
  }
  

  render() {
    let isSecure = this.state.isSecure;
  

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
            <LogoImage width={170} height={170} padding={3} />
          </View>

          <KeyboardAvoidingView enabled behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={style().card}>
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
                  icon="person"
                  component={CustomTextInput}
                />

                {/* EMAIL................................................................ */}

                <Field
                  placeholder="Email"
                  name="Email"
                  icon="mail"
                  component={CustomTextInput}
                />

                {/* MOBILE NUMBER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Field
                  placeholder="Mobile Number"
                  name={'MobileNumber'}
                  icon={'call-sharp'}
                  component={CustomTextInput}
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

                {/* UPLOAD BUTTON ----------------------------------------------------------------------------- */}

                <View>
                  <CustomUploadButton
                    title="Profile Image"
                    icon={faFileUpload}
                    imagedata={v => { 
                      
                      this.setState({profile: v.data , Errorprofile : false}) 
                      
                  
                  
                  }}
                    // onPress = {() =>this.props.navigation.navigate('camera')}
                  />

                  {this.state.Errorprofile  == true? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )}
                </View>
{/* GST ...................................................................................... */}
                <View>
                  <CustomUploadButton
                    title="Gst Certificate(optional)"
                    icon={faFileUpload}
                    imagedata={v => this.setState({gst: v.data , Errorgst : false})}
                    // onPress = {() =>this.props.navigation.navigate('camera')}
                  />

                  {/* {this.state.Errorgst ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal :5
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )} */}
                </View>
{/* TRADE........................................................................ */}
                <View>
                  <CustomUploadButton
                    title="Trade License(optional)"
                    icon={faFileUpload}
                    imagedata={v => this.setState({Trade: v.data , Errortrade : false})}
                  />

                  {/* {this.state.Errortrade ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )} */}
                </View>

     {/* FSSI .................................................................... */}       
         <View>
                  <CustomUploadButton
                    title="FSSI License"
                    icon={faFileUpload}
                    imagedata={v => this.setState({FSSI: v.data , Errorfassi : false})}
                  />

                  {this.state.Errorfassi ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )}
                </View>
{/* ID PROOF ............................................................... */}
                <View>
                  <CustomUploadButton
                    title="ID Proof"
                    icon={faFileUpload}
                    imagedata={v => this.setState({IDproof: v.data , ErroridProof : false})}
                  />

                  {this.state.ErroridProof ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )}
                </View>
{/* Address proof ......................................... */}
                <View>
                  <CustomUploadButton
                    title="Address Proof"
                    icon={faFileUpload}
                    imagedata={v => this.setState({AddProof: v.data , Erroraddproof : false})}
                  />

                  {this.state.Erroraddproof ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )}
                </View>
{/* chque ..................................................... */}
                <View>
                  <CustomUploadButton
                    title="Cancelled Cheque"
                    icon={faFileUpload}
                    imagedata={v => this.setState({CancelCheque: v.data , ErrorCancelCheque : false})}
                  />
                  {this.state.ErrorCancelCheque ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        color: 'red',
                        textAlign : 'right',
                        marginHorizontal : 3
                      }}>
                      Required
                    </Text>
                  ) : (
                    null
                  )}
                </View>
              </View>
            </ScrollView>
            <View
              style={{
                marginBottom: 15,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {this.state.TermAndCondition ? (
                <CustomButtonNoIcon
                  //      width={250}
                  title={this.state.isloading ? 'Loading' : 'Register'}
                  color={this.state.isloading ? '#000000' : '#FFF'}
                  backgroundColor={this.state.isloading ? '#F5F5F5' : '#E84341'}
                  onPress={this.props.handleSubmit(this.onSubmit)}
                />
              ) : (
                <CustomButtonNoIcon
                  disable={true}
                  //      width={250}
                  title={this.state.isloading ? 'Loading' : 'Register'}
                  color={this.state.isloading ? '#000000' : '#FFF'}
                  backgroundColor={
                    this.state.isloading ? '#F5F5F5' : '#E84341aa'
                  }
                  onPress={this.props.handleSubmit(this.onSubmit)}
                />
              )}

              <View
                style={{
                  marginVertical: 3,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CheckBox
                  value={this.state.TermAndCondition}
                  onValueChange={e => this.setState({TermAndCondition: e})}
                  disabled={false}
                  onFillColor={'#E84341'}
                  onTintColor={'#E84341'}
                  onCheckColor="#E84341"
                />
                <TextLink
                  text="I agree term and condition"
                  color="#E84F48"
                  textDecoration={true}
                  padding={0}
                  onPress={() => this.props.navigation.navigate('T&C')}
                />
              </View>
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
          </KeyboardAvoidingView>
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
      marginBottom: 10,
      justifyContent: 'center',
    },
    donthaveaccount: {
      textAlign: 'center',
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
  }

  if (!values.Password) {
    errors.Password = 'Required';
  }

  if (!values.PasswordConfirm) {
    errors.PasswordConfirm = 'Required';
  }
  if (!values.Password == values.PasswordConfirm) {
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
