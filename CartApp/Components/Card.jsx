import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import addCircle from '../assets/images/add_circle.png'


const Card = ({ImageName,dress,description,price}) => {
  return (
    <View>
      <Image style={styles.ImageContainer} source={ImageName}/>
      <Image style={styles.addIcon} source={addCircle}/>
      <Text style={{fontSize:18}}>{dress}</Text>
      <Text style={{color:'grey'}}>{description}</Text>
      <Text style={{color:'orange', marginBottom:10}}>{price}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
   
    addIcon:{
        position:'absolute',
        left:130,
        bottom:80,

    }
})