import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { FlatListComponent } from "../components/FlatList";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <FlatListComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});