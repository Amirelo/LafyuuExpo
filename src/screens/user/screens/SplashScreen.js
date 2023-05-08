import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { logo_splash } from '../../../assets/images';

const SplashScreen = ({navigation}) => {

    setTimeout(() =>{
        navigation.reset({
            index:0,
            routes:[{name:"Sign In"}],
        });
    },2000);

  return (
    <View style={styles.container}>
        <Image source={logo_splash}/>
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