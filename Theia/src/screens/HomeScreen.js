import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { Camera } from "expo-camera";
import * as Speech from 'expo-speech'

export default function HomeScreen() {
  const [textToSpeak, setTextToSpeak] = React.useState("");



  return (
        <View>
          <Text>Home Screen</Text>
          <TextInput onChangeText={newText => setTextToSpeak(newText)} value={textToSpeak}/>
          <Button style={{backgroundColor: '#a0b00c',}} onPress={() => Speech.speak(textToSpeak)} />
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
