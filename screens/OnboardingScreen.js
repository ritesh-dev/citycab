import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => {navigation.navigate('location')}}
      onDone={() => {navigation.navigate('location')}}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/img/ob1.png")} />,
          title: "Request Ride",
          subtitle: "Request a ride and get picked up by a nearby driver",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/img/ob2.png")} />,
          title: "Confirm your driver",
          subtitle: "Huge drivers network helps you find comfortable, safe and cheap ride",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../assets/img/ob3.png")} />,
          title: "Track your ride",
          subtitle: "Know your driver in advance and be able to view current location in real time on the map",
        },
      ]}
    />
  );
}
