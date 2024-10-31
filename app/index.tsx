import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";

export default function index() {
  return (
    <ImageBackground
      src="../assets/images/image.png"
      resizeMode="cover"
      style={styles.Container}
    >
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <FontAwesome6
          name="money-bill-trend-up"
          size={35}
          color={Colors.light.primary}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.light.primary,
          }}
        >
          MoonBank
        </Text>
      </View>

      <ButtonComponent
        text="Login"
        bordered={false}
        onPress={() => router.navigate("login")}
      />

      <ButtonComponent
        text="SignUp"
        bordered={true}
        onPress={() => router.navigate("signup")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
