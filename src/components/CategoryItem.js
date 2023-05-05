import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryItem = ({ imageLink, text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imageLink} />
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 70,
        height: 108,
        marginHorizontal: 8
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderColor: '#EBF0FF',
        borderWidth: 1,
        borderRadius: 66,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'stretch'
    },
    text: {
        marginTop: 8,
        color: '#9098B1',
        fontWeight: 400,
        lineHeight: 15,
        letterSpacing: 0.5,
        textAlign: 'center'
    }
})