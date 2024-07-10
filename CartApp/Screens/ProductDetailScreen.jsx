import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderSection from '../Components/HeaderSection'
import Export from '../assets/images/Export.png'
import Bleach from '../assets/images/Do Not Bleach.png'
import Dry from '../assets/images/Do Not Tumble Dry.png'
import Wash from '../assets/images/Do Not Wash.png'
import Iron from '../assets/images/Iron Low Temperature.png'
import Shipping from '../assets/images/Shipping.png'
import Forward from '../assets/images/Forward.png'
import AddToCart from '../Components/AddToCart'

const ProductDetailScreen = () => {
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
                const productlist = data.slice(0,1);
                setProducts(productlist)
                console.log(productlist)
            })
    }

    return (
        <View>
            <HeaderSection/>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image style={styles.ImageStyle} source={{ uri: item.image }} />
                        <View style={styles.secondContainer}>
                        <Text style={{ fontSize: 20,textAlign:'left' }}>{item.title}</Text>
                        <Image source={Export}/>
                        </View>
                        
                        <Text style={{width:'100%', fontSize:15,fontWeight:'500'}}>Materials</Text>    
                        <Text style={{ fontSize: 13,textAlign:'left', width:'100%' }}>{item.description}</Text>
                        
                        
                        <Text style={{ fontSize: 20, color: 'orange' ,width:'100%'}}>{`$ ${item.price}`}</Text>

                        <View style={styles.fourthContainer}>
                            <Image source={Bleach}/>
                            <Text>Do not use bleach</Text>
                        </View>
                        <View style={styles.fourthContainer}>
                            <Image source={Dry}/>
                            <Text>Do not tumble dry</Text>
                        </View>
                        <View style={styles.fourthContainer}>
                            <Image source={Wash}/>
                            <Text>Dry clean with tetrachloroethylene</Text>
                        </View>
                        <View style={styles.fourthContainer}>
                            <Image source={Iron}/>
                            <Text>Iron at a maximum of 110ºC/230ºF</Text>
                        </View>
                        <View style={styles.baseLine}></View>
                        <View style={styles.fourthContainer}>
                            <Image source={Shipping}/>
                            <Text>Dry clean with tetrachloroethylene</Text>
                            <Image style={styles.rightArrow} source={Forward}/>
                        </View>
                        <View style={styles.fifthContainer}>
                            
                            <Text>Estimated to be delivered on 09/11/2021 - 12/11/2021.</Text>
                        </View>
                        <AddToCart/>
                    </View>
                )}
            />
            
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    ImageStyle: {
        width: 200,
        height: 200
    },
    container: {
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        gap:10
    },
    secondContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    thirdContainer:{
        display:'flex',
        flexDirection:'column',
        gap:5
    },
    fourthContainer:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        width:'100%'
    },
    baseLine:{
        borderWidth:0.5,
        borderColor:'blue',
        width:'100%',
        opacity:0.5
    },
    fifthContainer:{
        width:'70%'
    }
})