import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LocationScreen from './screens/LocationScreen';
import SignInScreen from './screens/SignInScreen';
import OtpScreen from './screens/OtpScreen';
import HomeScreen from './screens/HomeScreen';
import ChooseLocation from './screens/ChooseLocation';
import FareScreen from './screens/FareScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onborading" component={OnboardingScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
        <Stack.Screen name="otp" component={OtpScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="chooselocation" component={ChooseLocation} />
        <Stack.Screen name="fare" component={FareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;