import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,useWindowDimensions } from "react-native";
import { Camera } from "expo-camera";

export default function EasyCamera(props, context) {
  let [hasPermission, setHasPermission] = useState(null);
  let [type, setType] = useState(Camera.Constants.Type.back);

  let windowWidth = useWindowDimensions().width;

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setType(Camera.Constants.Type.front);
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <Text>Camera not available on this device. Is this a simulator?</Text>
    );
  }

  if (hasPermission === false) {
    return <Text>Camera permission not granted.</Text>;
  }

  return (
    <View
      style={{
        height: props.height,
        width: props.width || windowWidth,
        ...props.style,
      }}
    >
      <Camera
        style={{
          flex: 1,
        }}
        type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            margin: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
              }}
            >
              Flip
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );

  return (
    <View>
      <Text>This is a camera.</Text>
    </View>
  );
}
