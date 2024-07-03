import { StyleSheet, View } from 'react-native'
import React from 'react'
import Items from './Items'




const ItemsContainer = () => {
  return (
    <View style={styles.container}>
        <Items/>
        
    </View>
  )
}

export default ItemsContainer

const styles = StyleSheet.create({
    container:{
        marginTop:20
    }
})