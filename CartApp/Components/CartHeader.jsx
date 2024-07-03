import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import search from '../assets/images/Search.png'
import Logo from '../assets/images/Logo.png'

const CartHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        <View></View>
      <View>
        <Image source={Logo}/>
      </View>
      <View>
        <Image source={search}/>
      </View>
    </View>
    </View>
  )
}

export default CartHeader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:30,
        marginBottom:30
    }
})