import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import * as images from '../assets/images'
import ImageButton from './ImageButton'

const CartItem = ({ name, price, imageLink, amount, onPressDecrease, onPressIncrease, onPressFavorite, onPressDelete }) => {
    return (
        <View style={[styles.container, styles.rowContainer]}>
            <Image source={imageLink} style={styles.image} />
            <View style={styles.detailContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.textName} numberOfLines={2}>{name}</Text>
                    <ImageButton imageLink={images.ic_love} color={"#FB7181"} />
                    <ImageButton imageLink={images.ic_trash} />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.price}>${price}</Text>
                    <View style={[styles.rowContainer, styles.amountControl]}>
                        <ImageButton imageLink={images.ic_minus} />
                        <Text>{amount}</Text>
                        <ImageButton imageLink={images.ic_plus} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    image: {
        width: 72,
        height: 72,
        marginVertical: 16,
        marginStart: 16,
        marginEnd: 12
    },
    detailContainer: {
        height: '100%',
        marginTop:16,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amountControl: {
        marginStart: 90
    },
    textName: {
        fontWeight: 700,
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: 0.5,
        color: '#223263',
        width: 158
    },
    price:{
        color:'#40BFFF',
        fontSize:12,
        fontWeight:700,
    }
})