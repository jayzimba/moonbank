import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { Colors } from "@/constants/Colors";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { router } from "expo-router";

export default function Page() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSignUp = async () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);

    if (!username || !email || !password || !phoneNumber) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("https://kabuuta.icu/signUp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username,
          email: email,
          password: password,
          phone_number: phoneNumber,
        }).toString(),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        Alert.alert("Success", data.message, [
          {
            text: "OK",
            onPress: () => router.navigate("/login"),
          },
        ]);
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };


  return (
    <ImageBackground
      source={require("../assets/images/image.png")}
      resizeMode="cover"
      style={styles.Container}
    >
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <FontAwesome6 name="user-plus" size={35} color={Colors.light.primary} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: Colors.light.primary,
          }}
        >
          Sign Up
        </Text>
      </View>

      {/* Username Input */}
      <View style={styles.TextInputStyle}>
        <FontAwesome name="user" size={24} color="grey" />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputText}
          autoCapitalize="none"
        />
      </View>

      {/* Email Input */}
      <View style={styles.TextInputStyle}>
        <MaterialCommunityIcons name="email-outline" size={24} color="grey" />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.inputText}
        />
      </View>

      {/* Password Input */}
      <View style={styles.TextInputStyle}>
        <Feather name="lock" size={24} color="grey" />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.inputText}
        />
      </View>

      {/* Phone Number Input */}
      <View style={styles.TextInputStyle}>
        <FontAwesome name="phone" size={24} color="grey" />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.inputText}
        />
      </View>

      {/* Signup Button */}
      <ButtonComponent text="Sign Up" bordered={false} onPress={handleSignUp} />
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
  inputText: {
    color: "grey",
    width: "90%",
    paddingHorizontal: 10,
  },
});
