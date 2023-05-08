import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import * as images from '../../../assets/images';
import CategoryItem from '../../../components/CategoryItem'

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>

          <View style={styles.productContainer}>
              <Text style={styles.textHeader}>Man Fashion</Text>
            </View>
            <View style={styles.itemListHorizontalContainer}>
              <CategoryItem
                text={"Man Shirt"}
                imageLink={images.product_man_shirt} />
              <CategoryItem
                text={"Man Work Equipment"}
                imageLink={images.product_man_work_equipment} />
              <CategoryItem
                text={"Man T-Shirt"}
                imageLink={images.product_man_tshirt} />
              <CategoryItem
                text={"Man Pants"}
                imageLink={images.product_man_pant} />
              <CategoryItem
                text={"Man Shoes"}
                imageLink={images.product_man_shoes} />
              <CategoryItem
                text={"Man Underwear"}
                imageLink={images.product_man_underwear} />
            </View>
          </View>

          <View style={styles.container}>

          <View style={styles.productContainer}>
              <Text style={styles.textHeader}>Woman Fashion</Text>
            </View>
            <View style={styles.itemListHorizontalContainer}>
              <CategoryItem
                text={"Dress"}
                imageLink={images.product_woman_dress} />
              <CategoryItem
                text={"Woman Bag"}
                imageLink={images.product_women_bag} />
              <CategoryItem
                text={"Woman T-Shirt"}
                imageLink={images.product_woman_tshirt} />
              <CategoryItem
                text={"Woman Pants"}
                imageLink={images.product_woman_pant} />
              <CategoryItem
                text={"Woman Shoes"}
                imageLink={images.product_woman_shoes} />
              <CategoryItem
                text={"Bikini"}
                imageLink={images.product_bikini} />
            </View>
          </View>

          
      </ScrollView>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  
  textHeader: {
    fontSize: 14,
    fontWeight: 700,
    color: '#223263',
    letterSpacing: 0.5,
  },
  productContainer:{
    marginTop:60,
    alignSelf:'flex-start',
    marginStart:32,
    width:'90%'
  },


  itemListHorizontalContainer: {
    marginTop: 32,
    marginHorizontal:16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})