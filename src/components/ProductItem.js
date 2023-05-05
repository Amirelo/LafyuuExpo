import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import * as images from '../assets/images';

const ProductItem = ({ imageLink, text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={imageLink} />
            <Text numberOfLines={2} ellipsizeMode='tail' style={styles.productName}>{text}</Text>
            <Image style={styles.rating} source={images.rating} />
            <Text style={styles.curPrice}>$299,43</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>$534,33</Text>
                <Text style={styles.pricePercentOff}>24% Off</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#EBF0FF',
        width: 141,
        height: 238,
        marginEnd: 16
    },
    image: {
        width: 109,
        height: 109,
        marginTop: 16,
        paddingStart:0,
        alignSelf:'center'
    },
    productName: {
        fontSize: 12,
        fontWeight: 700,
        color: '#223263',
        letterSpacing: 0.5,
        lineHeight: 18,
        marginTop: 8,
        alignItems: 'flex-start',
        paddingStart:16,
    },
    rating: {
        marginTop: 8,
        marginStart:16,
    },
    priceContainer: {
        marginTop: 8,
        flexDirection: 'row',
        textAlign: 'center',
        paddingStart:16,
    },
    curPrice: {
        color: '#40BFFF',
        fontWeight: 700,
        fontSize: 12,
        letterSpacing: 0.5,
        paddingStart:16,
    },
    oldPrice: {
        marginEnd:8,
        color: '#9098B1',
        fontSize: 10,
        letterSpacing: 0.5,
        textDecorationLine: 'line-through',
    },
    pricePercentOff: {
        color: '#FB7181',
        fontSize: 10,
        letterSpacing: 0.5,
        fontWeight: 700
    },

})