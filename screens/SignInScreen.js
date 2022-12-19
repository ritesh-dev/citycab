import React from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { color } from '../assets/colors'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'

export default function SignInScreen() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <View style={{backgroundColor: color.primary, flex: 1, alignItems: 'center'}}>
            <Image source={require('../assets/icon.png')} style={{marginTop: 30}}/>
        </View>
        <View style={{backgroundColor: '#ddd', flex: 1}}>
            
        </View>
        <View style={{position: 'absolute', backgroundColor: '#fff', padding: 20, width: '90%', alignSelf: 'center'}}>
            <Text style={{fontSize: 34, fontWeight: '500', textAlign: 'center'}}>Login</Text>
            <Text style={{fontSize: 20, fontWeight: '400', marginTop: 22, color: '#555'}}>Continue with Mobile</Text>
            <TextInput style={{marginTop: 15, backgroundColor: '#eee', padding: 20}} placeholder='Enter mobile number' />
            
            <TouchableOpacity style={{marginTop: 20, backgroundColor: color.primary, padding: 20, borderRadius: 10}}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, backgroundColor: color.primary, padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <AntDesign name="googleplus" size={24} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center', marginLeft: 15}}>Log In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 20, backgroundColor: color.primary, padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <MaterialIcons name="facebook" size={24} color="#fff"/>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center', marginLeft: 15}}>Connect with Facebook</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
