import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomInput = ({value, setValue, placeholder, imageLink,mTop, isSecure}) => {
  return (
    <View style={[
        styles.container,
        mTop ? {marginTop:mTop}: {} ]}>
        <Image style={styles.icon} source={imageLink}/>
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry = {isSecure}
            />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height: 48,
        marginTop:8,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        borderColor: '#EBF0FF',
        borderRadius: 5,
    },
    icon:{
       marginStart:18,
       marginEnd:12
    },
    input:{
        marginEnd:16,
        fontSize:12,
        width: '100%',
        height: '100%',
        
    }
})