import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Marquee from "./Marquee";
import Camera from "./Camera";
import Map from "./Map";

export default function App() {
  return (
    <View style={styles.container}>
      <Marquee textColor="blue">Hello Charlie</Marquee>
      <Text style={styles.message}>You can change this text in the source code and it will change on your device!</Text>
      <Camera height={280} />
      <Map height={280} />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});
