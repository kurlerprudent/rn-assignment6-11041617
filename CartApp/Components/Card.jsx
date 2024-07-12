import { StyleSheet, Text,Image, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import addCircle from '../assets/images/add_circle.png'



const Card = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      getProduct()
  }, [])

  const getProduct = () => {
      const URL = 'https://fakestoreapi.com/products'
      fetch(URL)
          .then((response) => {
              return response.json()
          })
          .then((data) => {
              const products = data
              setProducts(products)
              console.log(products)
          })
  }

  return (
      <View style={styles.mainContainer}>
          
          <FlatList
              data={products}
              renderItem={({ item }) => (
                  <View style={styles.container}>
                    <View style={styles.miniContainer}>
                    <Image style={styles.ImageStyle} source={{ uri: item.image }} />
                    <Image source={addCircle} style={{position:'absolute',right:50, bottom:80}}/>
                    <Text>{item.title}</Text>
                    <Text numberOfLines={2} style={{lineHeight:10}}>{item.category}</Text>
                    <Text style={{color:'orange',fontSize:20}}>{item.price}</Text>
                    </View>
                     
                
                  </View>
              )}
          />
          
      </View>
  )
}

export default Card

const styles = StyleSheet.create({
  ImageStyle: {
      width: 150,
      height: 200,
      

  },
  container: {
    display:'flex',
    flexDirection:'column',
    
     
  },
  miniContainer:{
    display:'flex',
    flexDirection:'column',
    flexWrap:'wrap'
  },
  mainContainer:{
    display:'flex',
    width:200,
    flexDirection:'row',
    padding:10,
    position:'relative',

    
  }
  
})