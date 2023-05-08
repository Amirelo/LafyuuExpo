import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import CustomInput from '../../../components/CustomInput'
import icon_search from '../../../assets/images/systemIcon/24px/Search.png'
import icon_heart from '../../../assets/images/systemIcon/24px/love.png'
import icon_notification from '../../../assets/images/systemIcon/24px/Notification.png'

import ImageButton from '../../../components/ImageButton'

const CustomSearchBar = ({value, setValue, isClicked}) => {
    return (
        <View style={[styles.rowContainer, { marginTop: 60 }]}>
            <CustomInput
                placeholder={"Search Product"}
                imageLink={icon_search}
                value={value}
                setValue={setValue}
                width={"60%"} />

            {isClicked ? 
            <ImageButton
                imageLink={icon_heart} />
            :
            [<ImageButton
                imageLink={icon_heart} />,
            <ImageButton
                imageLink={icon_notification}/>]}


        </View>
    )
}

export default CustomSearchBar

const styles = StyleSheet.create({})