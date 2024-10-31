import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function page() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.light.primary,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Link href="/" asChild>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 22 }}>
            Logout
          </Text>
        </Link>
      </View>
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
