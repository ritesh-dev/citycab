import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { color } from "../assets/colors";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9,
          }}
          provider={PROVIDER_GOOGLE}
          zoomControlEnabled
          initialCamera={{
            center: {
              latitude: 37.78825,
              longitude: -122.4324,
            },
            pitch: 45,
            heading: 90,
            altitude: 1000,
            zoom: 17,
          }}
        >
          <Marker
            draggable={true}
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title={"title"}
            description={"description"}
          />
        </MapView>
      </View>

      <View
        style={{
          position: "absolute",
          paddingTop: 30,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <MaterialIcons name="menu" size={32} />
          <MaterialIcons name="person" size={32} />
        </View>

        <View style={{ paddingVertical: 20, flexDirection: "row" }}>
          <View
            style={{
              width: "10%",
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              paddingVertical: 10,
            }}
          >
            <FontAwesome name="circle-o" color={color.primary} size={32} />
            <FontAwesome name="map-marker" color="red" size={32} />
          </View>
          <View style={{ width: "90%" }}>
            <View>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#aaa",
                  fontWeight: "600",
                }}
              >
                Pickup
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}

                onPress={()=>{navigation.navigate('chooselocation')}}
              >
                <Text
                  style={{
                    fontSize: 24,
                    paddingVertical: 10,
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  My Current Location
                </Text>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
            ></View>
            <View>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginTop: 10,
                  fontWeight: "600",
                }}
              >
                Drop off
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={()=>{navigation.navigate('chooselocation')}}
              >
                <Text
                  style={{
                    fontSize: 24,
                    paddingVertical: 10,
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  1005 William, Street
                </Text>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: color.primary, padding: 20 }}
          onPress={()=>{navigation.navigate('fare')}}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Confirm Destination
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
