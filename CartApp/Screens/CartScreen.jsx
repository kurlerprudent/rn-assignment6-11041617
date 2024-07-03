import { StyleSheet, View } from 'react-native'
import React from 'react'
import CartHeader from '../Components/CartHeader'
import CartHeaderText from '../Components/CartHeaderText'
import ItemsContainer from '../Components/Items'



const CartScreen = () => {
  return (
    <View>
      <CartHeader/>
      <CartHeaderText/>
      <ItemsContainer/>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  
})