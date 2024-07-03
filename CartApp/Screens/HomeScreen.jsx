import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import SecondSection from '../Components/SecondSection'
import CardHolder from '../Components/CardHolder'

const HomeScreen = () => {
  return (
   
    <ScrollView>
    <View style={styles.container}>
      <HeaderSection/>
      <SecondSection/>
      <CardHolder/>
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
    }
})