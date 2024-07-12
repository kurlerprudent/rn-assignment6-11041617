import { StyleSheet, View } from 'react-native'
import React from 'react'
import CartHeader from '../Components/CartHeader'
import CartHeaderText from '../Components/CartHeaderText'
import ItemsContainer from '../Components/Items'
import CheckoutButton from '../Components/CheckoutButton'
import CheckoutInfo from '../Components/CheckoutInfo'



const CartScreen = () => {
  return (
    <View >
      <CartHeader/>
      <CartHeaderText/>
      <ItemsContainer/>
      <View style={styles.miniContainer}>
        <CheckoutInfo/>
      <CheckoutButton/>
      </View>
      
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  
  miniContainer:{
    
    bottom:-200
  }
})