import { StyleSheet, Image,Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import remove from '../assets/images/remove.png'
import dress1 from '../assets/images/dress1.png'
import dress2 from '../assets/images/dress2.png'
import dress3 from '../assets/images/dress4.png'


const Items = () => {
const imageOne = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
const imageTwo = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
  return (
    <View>
        <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={{width:120, height:120, resizeMode:'contain'}} source={{uri :imageOne }}/>
      </View>
      <View style={styles.miniContainer}>
        <Text style={{fontSize:18, fontWeight:'500',lineHeight:20}}>OFFICE WEAR</Text>
        <Text  style={{lineHeight:20,}}>Your perfect pack for everyday</Text>
        <Text style={{color:'orange'}}>$120</Text>
        <Image style={styles.remove}source={remove}/>
      </View>
    </View>

    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image style={{width:120, height:120, resizeMode:'contain'}} source={{uri: imageTwo}}/>
      </View>
      <View style={styles.miniContainer}>
        <Text style={{fontSize:18, fontWeight:'500',lineHeight:20}}>LAMEREI</Text>
        <Text style={{lineHeight:30}}>Recycle Boucle Knit Cardigan Pink</Text>
        <Text style={{color:'orange'}}>$120</Text>
        <Image style={styles.remove}source={remove}/>
      </View>
    </View>

  
    </View>
  
  )
}

export default Items

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  },
  miniContainer:{
  
    padding:20
  },
  
  remove:{
    position:'absolute',
    bottom:20,
    right:50
  }
})