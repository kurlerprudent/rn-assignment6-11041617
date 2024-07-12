import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CheckoutInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:19}}>EST.   TOTAL</Text>
      <Text style={{fontSize:22, color:'orange'}}>$ 248</Text>
    </View>
  )
}

export default CheckoutInfo

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingHorizontal:10
    }
})