import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import icon_email from '../../../assets/images/systemIcon/24px/Message.png';
import icon_password from '../../../assets/images/systemIcon/24px/Password.png';
import icon_google from '../../../assets/images/OtherIcon/Google.png';
import icon_facebook from '../../../assets/images/OtherIcon/Facebook.png';

const SignUpScreen = () => {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [emailStatus, setEmailStatus] = useState();
  const [passwordStatus, setPasswordStatus] = useState();
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState();

  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.textHeader}>Let's get started</Text>
      <Text style={styles.textSubHeader}>Create a new account</Text>

      <CustomInput style={styles.inputFirst}
        placeholder={"Fullname"}
        imageLink={icon_email}
        value={email}
        setValue={setEmail}
        mTop={24}
         />

      <CustomInput
        placeholder={"Password"}
        imageLink={icon_password}
        value={password}
        setValue={setPassword}
        isSecure={true}
        />

      <CustomButton
        text={"Sign In"}
       
      />

      <View style={styles.rowContainer}>
        <View style={styles.line}></View>
        <Text style={styles.textOption}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <CustomButton
        text={"Login with Google"}
        imageLink={icon_google}
        type={"SECONDARY"}
        />

      <CustomButton
        text={"Login with Facebook"}
        imageLink={icon_facebook}
        type={"SECONDARY"}
        mTop={8}
       />

      <CustomButton
        text={"Forgot password?"}
        type={"TERTIARY"}
        mTop={32}
         />

      <View style={styles.rowContainer}>
        <Text style={styles.textSignUp}>Don't have an account? </Text>
        <CustomButton
          text={"Register"}
          type={"TERTIARY"}
          mTop={8}
           />
      </View>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  logo: {
    marginTop: 112
  },
  textHeader: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#223263',
    fontWeight: 700,
    paddingTop: 16,
  },
  textSubHeader: {
    fontSize: 12,
    letterSpacing: 0.5,
    color: '#9098B1',
    paddingTop: 8
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 21,

  },
  textOption: {
    color: '#9098B1',
    height: '100%',
    width: '20%',
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 21,
    letterSpacing: 0.5,
    fontWeight: 700
  },
  line: {
    width: '35%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#EBF0FF'
  },
  textSignUp: {
    marginTop: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    letterSpacing: 0.5,
    fontWeight: 700
  },

  textError: {
    color: '#FB7181',
    fontWeight: 700,
    marginTop: 8,
    alignSelf: 'flex-start',
    paddingStart: '5%'
  }
})