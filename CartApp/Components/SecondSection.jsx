import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import listView from '../assets/images/Listview.png'
import Filter from '../assets/images/Filter.png'

const SecondSection = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:23, fontWeight:'500'}}>OUR STORY</Text>
      </View>
      <View style={styles.miniContainer}>
        <Image source={listView}/>
        <Image source={Filter}/>
      </View>
    </View>
  )
}

export default SecondSection

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
    miniContainer:{
        display:'flex',
        flexDirection:'row',
        gap:12
    }
})