import React, { useState, useEffect } from "react";

import MapView, { Marker } from "react-native-maps";

import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as Location from "expo-location";

export default function Map(props, context) {
  let width = useWindowDimensions().width;
  width = props.width || width;

  let [location, setLocation] = useState(null);
  let [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  let text = "Waiting ...";
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log({ text });

  let initialRegion = null;
  if (location) {
    initialRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  } else {
    return <View />;
  }

  let name = props.name || "You";

  return (
    <View style={{ width, height: props.height || 280, ...props.style }}>
      <MapView
        initialRegion={initialRegion}
        style={{
          flex: 1,
        }}
      ><Marker coordinate={location.coords} title={name} description="You are here" />
      </MapView>
    </View>
  );
}
