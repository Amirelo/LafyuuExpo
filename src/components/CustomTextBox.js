import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTextBox = ({value, hasBox}) => {
  return (
    <View style={hasBox ? styles.container : {}}>
        <Text style={[styles.text, hasBox ? styles.hasBox : styles.text_noBox]}>{value}</Text>
    </View>
  )
}

export default CustomTextBox

const styles = StyleSheet.create({
    container:{
        width:42,
        height:41,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    text:{
        letterSpacing:0.5,
        
        fontWeight:700
    },
    text_hasBox:{
        color:'#223263',
        fontSize:16,
    },
    text_noBox:{
        color:'white',
        fontSize:14
    }
})