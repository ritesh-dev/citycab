import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import { FontAwesome } from "@expo/vector-icons";
import { color } from "../assets/colors";

const ChooseLocation = ({navigation}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "70%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
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
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{ padding: 10 }}>
              <FontAwesome name="map-marker" color="red" size={32} />
            </View>
            <View style={{ padding: 10, flex: 1 }}>
              <TextInput
                placeholder="Enter your location"
                style={{
                  backgroundColor: "#ddd",
                  padding: 10,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View style={{ paddingVertical: 2, paddingHorizontal: 20 }}>
            <View
              style={{ borderBottomColor: "#999", borderBottomWidth: 2 }}
            ></View>
          </View>

          <View style={{padding: 20}}>
            <Text style={{color: '#666'}}>POPULAR LOCATIONS</Text>
          </View>

          <View>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={{marginLeft: 20, size: 18}}>University of Washington</Text>
              </View>
              <FontAwesome name="star" size={18} color="orange"/>
            </View>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={{marginLeft: 20, size: 18}}>Woodlan Park</Text>
              </View>
              <FontAwesome name="star" size={18}/>
            </View>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={{marginLeft: 20, size: 18}}>Wellington Street</Text>
              </View>
              <FontAwesome name="star" size={18}/>
            </View>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={{marginLeft: 20, size: 18}}>Huskey Stadium</Text>
              </View>
              <FontAwesome name="star" size={18} color="orange"/>
            </View>
            <View style={{padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={{marginLeft: 20, size: 18}}>Riverra Park</Text>
              </View>
              <FontAwesome name="star" size={18} color="orange"/>
            </View>

            <View style={{padding: 20}}>
            <TouchableOpacity onPress={() => {navigation.navigate('home')}} style={{backgroundColor: color.primary, padding: 20, borderRadius: 5}}>
              <Text style={{textAlign: 'center', color: '#fff'}}>Done</Text>
            </TouchableOpacity>
            </View>
          </View>

        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ChooseLocation;
