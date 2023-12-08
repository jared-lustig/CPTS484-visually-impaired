import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import * as Speech from 'expo-speech'

export default function FallScreen() {
    const navigation = useNavigation();
    useEffect(() => {
      Speech.speak("Fall Detected");
    }, [])

    return (
        <View style={styles.container}>
          <Text style={styles.text}>It seems like you've had a fall. Are you okay?</Text>
          <Button
            mode="contained"
            onPress={navigation.navigate(HomeScreen)}
            style={styles.button}
          >
            Call Emergency Contact
          </Button>
          <Button
            mode="contained"
            onPress={navigation.navigate("Home")}
            style={styles.button}
          >
            I'm Ok
          </Button>
        </View>
      );
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
        },
        text: {
          fontSize: 18,
          marginBottom: 20,
          textAlign: "center",
        },
        button: {
          padding: 10,
        },
      });


