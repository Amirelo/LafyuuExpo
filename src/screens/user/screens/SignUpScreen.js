import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import * as images from '../../../assets/images'

const SignUpScreen = ({ navigation }) => {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [fullnameStatus, setFullnameStatus] = useState();
  const [emailStatus, setEmailStatus] = useState();
  const [passwordStatus, setPasswordStatus] = useState();
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState();

  const onToSignInPress = () => {
    navigation.goBack();
  }

  const onSignUpPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    fullname ? setFullnameStatus(false) : setFullnameStatus(true);
    email ? setEmailStatus(false) : setEmailStatus(true);
    //reg.test(email) ? setEmailStatus(false) : setEmailStatus(false)
    password ? setPasswordStatus(false) : setPasswordStatus(true);
    confirmPassword ? setConfirmPasswordStatus(false) : setConfirmPasswordStatus(true);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo} />
      <Text style={styles.textHeader}>Let's get started</Text>
      <Text style={styles.textSubHeader}>Create a new account</Text>

      <CustomInput style={styles.inputFirst}
        placeholder={"Fullname"}
        imageLink={images.ic_nav_user}
        value={fullname}
        setValue={setFullname}
        mTop={24}
        hasError={fullnameStatus}
      />
      {fullnameStatus == true ?
        <Text style={styles.textError}>Fullname cannot be empty</Text>
        : <></>}

      <CustomInput style={styles.inputFirst}
        placeholder={"Email"}
        imageLink={images.ic_message}
        value={email}
        setValue={setEmail}
        hasError={emailStatus}
      />

      {emailStatus == true ?
        <Text style={styles.textError}>Email cannot be empty</Text>
        : <></>}

      <CustomInput
        placeholder={"Password"}
        imageLink={images.ic_password}
        value={password}
        setValue={setPassword}
        isSecure={true}
        hasError={passwordStatus}
      />
      {passwordStatus == true ?
        <Text style={styles.textError}>Password cannot be empty</Text>
        : <></>}

      <CustomInput
        placeholder={"Confirm Password"}
        imageLink={images.ic_password}
        value={confirmPassword}
        setValue={setConfirmPassword}
        isSecure={true}
        hasError={confirmPasswordStatus}
      />

      {confirmPasswordStatus == true ?
        <Text style={styles.textError}>Confirm password cannot be empty</Text>
        : <></>}

      <CustomButton
        text={"Sign Up"}
        onPress={onSignUpPress}
      />

      <View style={styles.rowContainer}>
        <Text style={styles.textSignUp}>Already have an account? </Text>
        <CustomButton
          text={"Sign In"}
          type={"TERTIARY"}
          mTop={8}
          onPress={onToSignInPress}
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