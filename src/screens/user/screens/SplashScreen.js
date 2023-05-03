import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo-splash.png';

const SplashScreen = ({navigation}) => {

    setTimeout(() =>{
        navigation.reset({
            index:0,
            routes:[{name:"Sign In"}],
        });
    },2000);

  return (
    <View style={styles.container}>
        <Image source={Logo}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#40BFFF',
    },
    
    
})