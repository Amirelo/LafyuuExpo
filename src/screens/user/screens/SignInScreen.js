import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import icon_email from '../../../assets/images/systemIcon/24px/Message.png';
import icon_password from '../../../assets/images/systemIcon/24px/Password.png';
import icon_google from '../../../assets/images/OtherIcon/Google.png';
import icon_facebook from '../../../assets/images/OtherIcon/Facebook.png';

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [status, setStatus] = useState();

    const onSignInPress =() =>{
        console.warn("Sign In");
        (email == 'a' && password == 'a') ? 
            [console.warn("Login success"),
            setStatus(false) ]
        : 
            [console.warn("Login fail"),
            setStatus(true)]
    }

    const onGoogleSignInPress =() =>{
        console.warn("Google");
    }

    const onFacebookSignInPress =() =>{
        console.warn("Facebook");
    }

    const onForgotPasswordPress =() =>{
        console.warn("Forgot password");
    }

    const onSignUpPress =() =>{
        navigation.navigate("Sign Up")
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.textHeader}>Welcome to Lafyuu</Text>
            <Text style={styles.textSubHeader}>Sign in to continue</Text>
            
            <CustomInput style={styles.inputFirst}
                placeholder={"Email"}
                imageLink={icon_email}
                value={email}
                setValue={setEmail}
                mTop={24} 
                hasError={status}
                inputType={"email"}/>

            <CustomInput
                placeholder={"Password"}
                imageLink={icon_password}
                value={password}
                setValue={setPassword}
                isSecure={true}
                hasError={status} />
            {status == true ? 
            <Text style={styles.textError}>Oops! Username or Password is incorrect</Text>
            : 
            <></>}

            <CustomButton 
            text={"Sign In"}
            onPress={onSignInPress}
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
                onPress={onGoogleSignInPress}/>

            <CustomButton
                text={"Login with Facebook"}
                imageLink={icon_facebook}
                type={"SECONDARY"}
                mTop={8}
                onPress={onFacebookSignInPress}/>

            <CustomButton 
            text={"Forgot password?"}
            type={"TERTIARY"}
            mTop={32}
            onPress={onForgotPasswordPress}/>

            <View style={styles.rowContainer}>
            <Text style = {styles.textSignUp}>Don't have an account? </Text>
            <CustomButton 
            text={"Sign Up"}
            type={"TERTIARY"}
            mTop={8}
            onPress={onSignUpPress}/>
            </View>

        </View>
    )
}

export default SignInScreen

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
    rowContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:21,
        
    },
    textOption:{
        color:'#9098B1',
        height:'100%',
        width:'20%',
        textAlign:'center',
        fontSize:14,  
        paddingHorizontal:21,
        letterSpacing:0.5,
        fontWeight:700
    },
    line:{
        width:'35%',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:'#EBF0FF'
    },
    textSignUp:{
        marginTop:8,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        fontSize:12,
        letterSpacing:0.5,
        fontWeight:700
    },
    
    textError:{
        color:'#FB7181',
        fontWeight:700,
        marginTop:8,
        alignSelf:'flex-start',
        paddingStart: '5%'
    }
    
    

})