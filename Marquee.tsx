import React from "react";

import { Text, View } from "react-native";
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
  Inter_900Black,
} from "@expo-google-fonts/dev";

export default function Marquee(props, context) {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <Text
        style={{
          fontFamily: "Nunito_400Regular",
          fontSize: 30,
          color: "black",
        }}
      >
        {props.children}
      </Text>
    );
  }
}
