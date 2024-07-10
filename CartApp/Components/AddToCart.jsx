import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Add from '../assets/images/add_circle.png'
import Heart from '../assets/images/Heart.png'

const AddToCart = () => {
  return (
    <View style={styles.container}>
     <View style={styles.miniContainer}>
        <Image style={styles.imageSize} source={Add}/>
        <Text style={styles.textEdit}>Add to cart</Text>
     </View>
     <Image source={Heart} style={styles.imageSize}/>
    </View>
  )
}

export default AddToCart

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        backgroundColor:'black',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        marginBottom:20

    },textEdit:{
        color:'white',
        fontSize:20
    },
    miniContainer:{
        flexDirection:'row',
        gap:20
    },
    imageSize:{
        width:30
    }
})