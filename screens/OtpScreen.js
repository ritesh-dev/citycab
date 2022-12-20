import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { color } from '../assets/colors'

export default function OtpScreen({navigation}) {
  return (
    <SafeAreaView>
        <View style={{backgroundColor: color.primary, paddingHorizontal: 10, paddingVertical: 20}}>
            <AntDesign name='arrowleft' size={32} color="#fff"/>
            <Text style={{color: '#fff', fontSize: 40, marginTop: 30, fontWeight: 'bold'}}>Phone Verification</Text>
            <Text style={{color: '#fff', marginVertical: 20, fontSize: 18}}>Enter your OTP here</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
            <View style={{padding: 10}}>
                <TextInput style={{borderBottomColor:'#ccc', borderBottomWidth: 2, fontSize: 24, padding: 20}} />
            </View>
            <View style={{padding: 10}}>
                <TextInput style={{borderBottomColor:'#ccc', borderBottomWidth: 2, fontSize: 24, padding: 20}} />
            </View>
            <View style={{padding: 10}}>
                <TextInput style={{borderBottomColor:'#ccc', borderBottomWidth: 2, fontSize: 24, padding: 20}} />
            </View>
            <View style={{padding: 10}}>
                <TextInput style={{borderBottomColor:'#ccc', borderBottomWidth: 2, fontSize: 24, padding: 20}} />
            </View>
        </View>
        <View style={{padding: 20, marginTop: 20}}>
            <TouchableOpacity style={{backgroundColor: color.primary, padding: 15, borderRadius: 5}} onPress={() => {navigation.navigate('home')}}>
                <Text style={{color: '#fff', fontSize: 22, textAlign: 'center'}}>Verify Now</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
