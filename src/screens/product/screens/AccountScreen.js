import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as images from '../../../assets/images'
import CustomButton from '../../../components/CustomButton'

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Account</Text>
      <CustomButton
        text={"Profile"}
        imageLink={images.ic_nav_user}
        type={"SECONDARY"}
        txtAlign={"left"}
        bgColor={'white'}
        isBlue={true} />

      <CustomButton
        text={"Order"}
        imageLink={images.ic_bag}
        type={"SECONDARY"}
        txtAlign={"left"}
        bgColor={'white'}
        isBlue={true}
        mTop={0} />

      <CustomButton
        text={"Address"}
        imageLink={images.ic_location}
        type={"SECONDARY"}
        txtAlign={"left"  }
        bgColor={'white'}
        isBlue={true}
        mTop={0} />

      <CustomButton
        text={"Payment"}
        imageLink={images.ic_credit_card}
        type={"SECONDARY"}
        txtAlign={"left"}
        bgColor={'white'}
        isBlue={true}
        mTop={0} />
    </View>
  )
}

export default AccountScreen

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