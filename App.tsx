import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Marquee from "./Marquee";
import Camera from "./Camera";
import Map from "./Map";

export default function App() {
  // return (
  //   <View style={{ height: 300, width: 300 }}>
  //     <Text style={{ fontSize: 60 }}>Hello Nurse</Text>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Marquee>Hello Jason</Marquee>
      <Camera height={280} />
      <Map height={280} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
