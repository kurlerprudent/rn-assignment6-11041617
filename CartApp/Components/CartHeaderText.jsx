import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartHeaderText = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:'300', textAlign:'center', letterSpacing:4}}>CHECKOUT</Text>
    </View>
  )
}

export default CartHeaderText

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginBottom:30

    }
})