import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';

export default function LocationScreen({navigation}) {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={{uri: 'https://ik.imagekit.io/qpjmpqdml/ob4.png'}} style={{width: 200, height: 200}} />
        <Text style={{fontSize: 36, fontWeight:'bold', marginTop: 10}}>Hi, nice to meet you</Text>
        <Text style={{marginTop: 15}}>Choose your location to start find your cab</Text>
        <TouchableOpacity onPress={()=> {navigation.navigate('signin')}} style={{flexDirection: 'row', marginTop: 30, justifyContent: 'space-around', alignItems: 'center', borderColor: '#005df4', borderWidth: 2, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 7}}>
            <MaterialIcons name='gps-fixed' size={28}/>
            <Text style={{fontSize: 24, marginLeft: 10}}>Use current location</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 30, color: 'red', fontSize: 16, fontWeight: '600', textDecorationStyle: 'solid', textDecorationColor: 'red', textDecorationLine: 'underline'}}>Select it manually</Text>
    </View>
  )
}
