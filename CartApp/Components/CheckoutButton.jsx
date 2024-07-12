import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Shopping from '../assets/images/shopping bag.png'

const CheckoutButton = () => {
  return (
    <View style={styles.container}>
        <Image source={Shopping} style={{zIndex:4}}/>
      <Text style={{color:'white',fontSize:20}}>CheckoutButton</Text>
      
    </View>
  )
}

export default CheckoutButton

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        backgroundColor:'#393939',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:8
        
    }
})