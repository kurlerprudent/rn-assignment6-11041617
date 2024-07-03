import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import menuLogo from '../assets/images/Menu.png'
import Logo from '../assets/images/Logo.png'
import findIcon from '../assets/images/Search.png'
import Bag from '../assets/images/shoppingBag.png'


const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <View><Image source={menuLogo}/></View>
      <View><Image source={Logo}/></View>
      <View style={styles.miniContainer}>
      <Image source={findIcon}/>
      <Image source={Bag}/>
      </View>
    </View>
  )
}

export default HeaderSection

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:35,
        marginBottom:20
    },
    miniContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:60
    }
})