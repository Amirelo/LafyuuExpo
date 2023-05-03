import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const CustomInput = ({value, setValue, placeholder, imageLink,mTop, isSecure, hasError}) => {
  const [isSelected, setIsSelected] = useState(false);
  const onTextInputPressIn = () =>{
    setIsSelected(true);
    hasError=false;
  }

  const onTextInputPressOut = () =>{
    setIsSelected(false);
  }

  return (
    <View  style={[
        styles.container,
        mTop ? {marginTop:mTop}: {} ,
        hasError ==true ? styles.inputFailAuthen : styles.inputNormal,
        isSelected ? styles.inputSelected : {},
         ]}>
        <Image style={styles.icon} source={imageLink}/>
        <TextInput 
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry = {isSecure}
            onFocus={onTextInputPressIn}
            onBlur={onTextInputPressOut}
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
    },
    inputSelected:{
      borderColor: '#40BFFF',
    },

    inputStopSelection:{
      borderColor: '#EBF0FF'
    },
    inputFailAuthen:{
      borderColor: '#FB7181'
    },
    inputNormal:{
      borderColor: '#EBF0FF',
    }
})