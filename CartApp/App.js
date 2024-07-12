import { StyleSheet, View } from 'react-native';


import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen'
import AddToCart from './Components/AddToCart';


export default function App() {
  return (
    <View >
     <ProductDetailScreen/>
    </View>
  )
}

const styles = StyleSheet.create({});
