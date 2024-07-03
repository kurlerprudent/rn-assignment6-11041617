import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from './Card'
import dress1 from '../assets/images/dress1.png'
import dress2 from '../assets/images/dress2.png'
import dress3 from '../assets/images/dress3.png'
import dress4 from '../assets/images/dress4.png'
import dress5 from '../assets/images/dress5.png'
import dress6 from '../assets/images/dress6.png'

const CardHolder = () => {
  return (
   
         <View style={styles.container}>
            <View style={styles.miniContainer}>
            <Card ImageName={dress1} dress='Office Wear' description='Reversible angora Cardigan' price='$ 120' />

            <Card ImageName={dress2} dress='Black ' description='Reversible angora Cardigan' price='$ 120' />
            </View>

            <View style={styles.miniContainer}>
            <Card ImageName={dress3} dress='Church Wear' description='Reversible angora Cardigan' price='$ 120' />

            <Card ImageName={dress4} dress='Lamerei Wear' description='Reversible angora Cardigan' price='$ 120' />
            </View>

            <View style={styles.miniContainer}>
            <Card ImageName={dress5} dress='21WN' description='Reversible angora Cardigan' price='$ 120' />

            <Card ImageName={dress6} dress='Lame' description='Reversible angora Cardigan' price='$ 120' />
            </View>
            
     

    </View>
    
   

    
  )
}

export default CardHolder

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexWrap:'wrap'
    },
    miniContainer:{
        display:'flex',
        flexDirection:'row',
        gap:5
    }
})