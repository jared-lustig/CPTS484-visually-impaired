import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

export default function FallScreen() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
          <Text style={styles.text}>It seems like you've had a fall. Are you okay?</Text>
          <Button
            mode="contained"
            onPress={navigation.navigate(HomeScreen)}
            style={styles.button}
          >
            Yes, take me back to the Home Screen
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


