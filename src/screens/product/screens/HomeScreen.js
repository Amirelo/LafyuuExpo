import { StyleSheet, Text, View, Image, ImageBackground,ScrollView } from 'react-native'
import React, { useContext } from 'react'
import * as images from '../../../assets/images';
import CustomButton from '../../../components/CustomButton'
import { AuthContext } from '../../../components/AuthContext'
import CustomInput from '../../../components/CustomInput'
import ImageButton from '../../../components/ImageButton'
import CustomTextBox from '../../../components/CustomTextBox'
import CategoryItem from '../../../components/CategoryItem'
import ProductItem from '../../../components/ProductItem'

const HomeScreen = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={[styles.rowContainer, { marginTop: 60 }]}>
                        <CustomInput
                            placeholder={"Search Product"}
                            imageLink={images.ic_nav_search}
                            width={"60%"} />

                        <ImageButton
                            imageLink={images.ic_love} />

                        <ImageButton
                            imageLink={images.ic_notification} />


                    </View>
                    <ImageBackground style={styles.imageBackground}
                        source={images.img_promote_1}>
                        <Text style={styles.textPromote}>Super Flash Sale 50% Off</Text>
                        <View style={[styles.rowContainer, styles.rowViewPromote]}>
                            <CustomTextBox hasBox={true} value={"08"} />
                            <CustomTextBox value={":"} />
                            <CustomTextBox hasBox={true} value={"34"} />
                            <CustomTextBox value={":"} />
                            <CustomTextBox hasBox={true} value={"52"} />
                        </View>
                    </ImageBackground>

                    <View style={[styles.rowContainer, styles.rowViewSlider]}>
                        <Image source={images.ic_dotInactive}></Image>
                        <Image source={images.ic_dotInactive}></Image>
                        <Image source={images.ic_dot}></Image>
                        <Image source={images.ic_dotInactive}></Image>
                        <Image source={images.ic_dotInactive}></Image>
                    </View>

                    <View style={styles.itemListContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.textHeader}>Category</Text>
                            <CustomButton
                                text={"More Category"}
                                type={"TERTIARY"}
                                mTop={1}
                                fontSize={16} />
                        </View>

                        <View style={styles.categoryItemContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <CategoryItem
                                    text={"Man Shirt"}
                                    imageLink={images.product_man_shirt} />
                                <CategoryItem
                                    text={"Dress"}
                                    imageLink={images.product_woman_dress} />
                                <CategoryItem
                                    text={"Man Work Equipment"}
                                    imageLink={images.product_man_work_equipment} />
                                <CategoryItem
                                    text={"Woman Bag"}
                                    imageLink={images.product_women_bag} />
                                <CategoryItem
                                    text={"Man T-Shirt"}
                                    imageLink={images.product_man_tshirt} />
                                <CategoryItem
                                    text={"Woman T-Shirt"}
                                    imageLink={images.product_woman_tshirt} />
                                <CategoryItem
                                    text={"Man Pants"}
                                    imageLink={images.product_man_pant} />
                                <CategoryItem
                                    text={"Woman Pants"}
                                    imageLink={images.product_woman_pant} />
                                <CategoryItem
                                    text={"Man Shoes"}
                                    imageLink={images.product_man_shoes} />
                                <CategoryItem
                                    text={"Woman Shoes"}
                                    imageLink={images.product_woman_shoes} />
                                <CategoryItem
                                    text={"Man Underwear"}
                                    imageLink={images.product_man_underwear} />
                                <CategoryItem
                                    text={"Bikini"}
                                    imageLink={images.product_bikini} />
                            </ScrollView>
                        </View>
                    </View>

                    <View style={styles.itemListContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.textHeader}>Flash Sale</Text>
                            <CustomButton
                                text={"See more"}
                                type={"TERTIARY"}
                                mTop={1}
                                fontSize={16} />
                        </View>
                        <View style={styles.productItemContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ProductItem
                                    imageLink={images.img_product_1}
                                    text={'FS - Nike Air Max 270'} />
                                <ProductItem
                                    imageLink={images.img_product_2}
                                    text={'FS - Quilted MAXI CROSS'} />
                                <ProductItem
                                    imageLink={images.img_product_3}
                                    text={'Nike Air Max 270'} />
                            </ScrollView>
                        </View>
                    </View>

                    <View style={styles.itemListContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.textHeader}>Mega Sale</Text>
                            <CustomButton
                                text={"See more"}
                                type={"TERTIARY"}
                                mTop={1}
                                fontSize={16} />
                        </View>
                        <View style={styles.productItemContainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <ProductItem
                                    imageLink={images.img_product_4}
                                    text={'MS - Nike Air Max 270'} />
                                <ProductItem
                                    imageLink={images.img_product_2}
                                    text={'FS - Quilted MAXI CROSS'} />
                                <ProductItem
                                    imageLink={images.img_product_3}
                                    text={'Nike Air Max 270'} />
                            </ScrollView>
                        </View>
                    </View>

                    <ImageBackground style={styles.imageBackground}
                        source={images.img_promote_2}>
                        <Text style={styles.textPromote}>Recommended Product</Text>
                        <Text style={styles.textPromote_subTitle}>We recommend the best for you </Text>
                    </ImageBackground>

                    <View style={styles.itemListHorizontalContainer}>
                        <ProductItem
                            imageLink={images.img_product_4}
                            text={'MS - Nike Air Max 270'} />
                        <ProductItem
                            imageLink={images.img_product_2}
                            text={'FS - Quilted MAXI CROSS'} />
                        <ProductItem
                            imageLink={images.img_product_3}
                            text={'Nike Air Max 270'} />
                        <ProductItem
                            imageLink={images.img_product_1}
                            text={'FS - Nike Air Max 270'} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    imageBackground: {
        width: 343,
        height: 206,
        marginTop: 16,
    },
    textPromote: {
        width: '60%',
        marginTop: 32,
        marginStart: 24,
        color: 'white',
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 36,
        letterSpacing: 0.5
    },
    textPromote_subTitle: {
        color: 'white',
        fontSize: 12,
        letterSpacing: 0.5,
        marginTop: 16,
        marginStart: 24,
    },
    rowViewPromote: {
        marginTop: 29,
        marginStart: 24,
        width: '44%'
    },
    rowViewSlider: {
        width: '30%',
        marginTop: 16
    },
    headerContainer: {

        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '88%',
    },
    textHeader: {
        fontSize: 14,
        fontWeight: 700,
        color: '#223263',
        letterSpacing: 0.5,
    },
    categoryItemContainer: {
        marginTop: 12,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    productItemContainer: {
        width: '90%',
        marginHorizontal: 16,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    itemListContainer: {
        marginTop: 48,
        width: '100%',
        alignItems: 'center'
    },
    itemListHorizontalContainer:{
        marginTop:32,
        width: '90%',
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap'
    }
})