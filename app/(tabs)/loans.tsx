import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function page() {
  return (
    <View style={styles.container}>
      <Text>page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
