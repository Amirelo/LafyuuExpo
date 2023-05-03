import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


const CustomButton = ({text, imageLink, type, mTop, onPress}) => {
  return (
    <TouchableOpacity 
        onPress = {onPress}
        style = {[
            styles.button,
            type ? styles[`buttonStyle_${type}`] : styles['buttonStyle_PRIMARY'],
            mTop ? {marginTop:mTop} : {} ]}>
        {imageLink? 
        <Image style={styles.image}
            source={imageLink}/>: <></>
        }    
        <Text
            style={[
                styles.text,
                type ? styles[`textStyle_${type}`] : styles['textStyle_PRIMARY'] ]} 
                >{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        width: '90%',
        height:57,
        marginTop:16,
        borderRadius:5,
        alignItems:'center',
        

    },
    buttonStyle_PRIMARY:{
        elevation:10,
        shadowColor:'#40BFFF',
        shadowOpacity:0.24,
        shadowOffset:{width:0, height:10},
        shadowRadius:30,
        backgroundColor: '#40BFFF',
    },
    buttonStyle_SECONDARY:{
        
        borderColor:'#EBF0FF',
        backgroundColor:'#EBF0FF'
    },
    buttonStyle_TERTIARY:{
        width:'auto',
        height:'auto',
    },
    text:{
        fontSize:14,
        letterSpacing: 0.5,
        fontWeight:'700',
        width: '100%',
        textAlign:'center'
    },
    textStyle_PRIMARY:{
        color:'white',
    },
    textStyle_SECONDARY:{
        color:'#9098B1',
    },
    textStyle_TERTIARY:{
        color:'#40BFFF',
        fontSize:12,
        width:'auto',
        height:'auto',
    },
    image:{
        alignSelf:'center',
        marginHorizontal: 16,
        position:'absolute'
    }
})