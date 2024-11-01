

import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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

      <View style={styles.TextInputStyle}>
        <MaterialCommunityIcons name="email-outline" size={24} color="grey" />
        <TextInput
          placeholder="example@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          selectionColor={"grey"}
          style={{
            color: "grey",
            width: "90%",
            paddingHorizontal: 10,
          }}
        />
      </View>
      <View style={styles.TextInputStyle}>
        <Feather name="lock" size={24} color="grey" />
        <TextInput
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={true}
          inputMode="text"
          selectionColor={"grey"}
          style={{
            color: "grey",
            width: "90%",
            paddingHorizontal: 10,
          }}
        />
      </View>

      <ButtonComponent
        text="Login"
        bordered={false}
        onPress={() => router.navigate("/(tabs)/home")}
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
  TextInputStyle: {
    width: "100%",
    height: 50,
    borderColor: Colors.light.primary,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});
