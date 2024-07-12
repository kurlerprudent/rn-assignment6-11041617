import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import SecondSection from '../Components/SecondSection'
import CardHolder from '../Components/CardHolder'


const HomeScreen = () => {
  return (
   
    
    <View style={styles.container}>
      
      <HeaderSection/>
      <SecondSection/>
      <CardHolder/>
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    }
})