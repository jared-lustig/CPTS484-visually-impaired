import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { Camera } from "expo-camera";
import * as Speech from 'expo-speech'

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [textToSpeak, setTextToSpeak] = React.useState("");

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

  const openCamera = () => {
    setIsCameraOpen(true);
    Speech.speak('opening camera');
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
    Speech.speak("closing camera");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {hasPermission && hasPermission !== null && isCameraOpen ? (
        <View style={styles.cameraContainer}>
          <Camera style={styles.fixedRatio} type={cameraType} ratio={"1:1"} />

          <Button onPress={closeCamera} style={styles.cameraButton}>
            Close Camera
          </Button>
          <Button
            onPress={handleCameraTypeToggle}
            style={{ ...styles.cameraButton, right: 16 }}
          >
            Flip Camera
          </Button>
        </View>
      ) : (
        <View>
          <Text>Home Screen</Text>
          <Button onPress={openCamera}>Open Camera</Button>
          <TextInput onChangeText={newText => setTextToSpeak(newText)} value={textToSpeak}/>
          <Button style={{backgroundColor: '#a0b00c',}} onPress={() => Speech.speak(textToSpeak)} />
        </View>
      )}
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
