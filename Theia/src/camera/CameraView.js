import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";
import { Camera } from "expo-camera";

export default function CameraView() {
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      setHasPermission(true);
    })();
  }, []);

  const handleCameraTypeToggle = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.cameraContainer}>
          <Camera style={styles.fixedRatio} type={cameraType} ratio={"1:1"} />
          <Button
            onPress={handleCameraTypeToggle}
            style={{ ...styles.cameraButton, right: 16 }}
          >
            Flip Camera
          </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraButton: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
});
