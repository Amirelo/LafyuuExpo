import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CartItem from '../../../components/CartItem'
import * as images from '../../../assets/images'

const CartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Your Cart</Text>

      <CartItem
        name={"Nike Air Zoom Pegasus 36 Miami"}
        price={"299.43"}
        imageLink={images.img_product_1}
        amount={2} />

      <CartItem
        name={"Nike Air Zoom Pegasus 36 Miami"}
        price={"299.43"}
        imageLink={images.img_product_2}
        amount={2} />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 700,
    color: '#223263',
    letterSpacing: 0.5,
    width: '90%'
  },
})