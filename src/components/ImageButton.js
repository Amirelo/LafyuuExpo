import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import { ImageBackground } from 'react-native'

const ImageButton = ({ imageLink, onPress, mTop }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                mTop ? { marginTop: mTop } : {}]}>
            <Image style={styles.image}
                source={imageLink} />

        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },

})