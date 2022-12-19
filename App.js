import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LocationScreen from './screens/LocationScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onborading" component={OnboardingScreen} />
        <Stack.Screen name="location" component={LocationScreen} />
        <Stack.Screen name="signin" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;