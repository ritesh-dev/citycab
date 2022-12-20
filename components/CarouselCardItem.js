import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import { color } from '../assets/colors'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={{paddingVertical: 20, backgroundColor: '#fff', borderRadius: 5}}>
        <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name='cab' size={32}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 24}}>{item.title}</Text>
                    <Text>2 mins away</Text>
                </View>
            </View>
            <View>
                <Text style={{fontSize: '32'}}>${item.price}</Text>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{padding: 20, alignItems: 'center'}}>
                <FontAwesome name='google-wallet' size={32} />
                <Text style={{color: '#666', marginTop: 10}}>Wallet</Text>
            </View>
            <View style={{padding: 20, alignItems: 'center'}}>
                <FontAwesome name='ticket' size={32} />
                <Text style={{color: '#666', marginTop: 10}}>Coupons</Text>
            </View>
            <View style={{padding: 20, alignItems: 'center'}}>
                <MaterialCommunityIcons name='dots-horizontal' size={32} />
                <Text style={{color: '#666', marginTop: 10}}>Options</Text>
            </View>
        </View>
        <View style={{padding: 20}}>
            <TouchableOpacity style={{backgroundColor: color.primary, padding: 20, borderRadius: 5}}>
                <Text style={{textAlign: 'center', color: '#fff'}}>Book Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

{/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      /> */}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 100,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem