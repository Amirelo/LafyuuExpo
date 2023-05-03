import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import icon_email from '../../../assets/images/systemIcon/24px/Message.png';
import icon_password from '../../../assets/images/systemIcon/24px/Password.png';
import icon_user from '../../../assets/images/systemIcon/24px/User.png';

const SignUpScreen = ({navigation}) => {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [emailStatus, setEmailStatus] = useState();
  const [passwordStatus, setPasswordStatus] = useState();
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState();

  const onSignInPress = () => {
    navigation.goBack();
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.textHeader}>Let's get started</Text>
      <Text style={styles.textSubHeader}>Create a new account</Text>

      <CustomInput style={styles.inputFirst}
        placeholder={"Fullname"}
        imageLink={icon_user}
        value={fullname}
        setValue={setFullname}
        mTop={24}
         />

      <CustomInput style={styles.inputFirst}
        placeholder={"Email"}
        imageLink={icon_email}
        value={email}
        setValue={setEmail}
      />

      <CustomInput
        placeholder={"Password"}
        imageLink={icon_password}
        value={password}
        setValue={setPassword}
        isSecure={true}
        />

      <CustomInput
        placeholder={"Confirm Password"}
        imageLink={icon_password}
        value={confirmPassword}
        setValue={setConfirmPassword}
        isSecure={true}
      />

      <CustomButton
        text={"Sign Up"}
       
      />

      <View style={styles.rowContainer}>
        <Text style={styles.textSignUp}>Already have an account? </Text>
        <CustomButton
          text={"Sign In"}
          type={"TERTIARY"}
          mTop={8}
          onPress={onSignInPress}
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