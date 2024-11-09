import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import ButtonComponent from "@/components/ButtonComponent";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import {
  Feather,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://kabuuta.icu/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
        }).toString(),
      });

      const data = await response.json();

      console.log(data);
      console.log("email: " + email);
      console.log("password: " + password);
      
      if (response.ok) {
        if(data.success){
          // Handle successful login (e.g., save token, navigate)
          Alert.alert(data.message, "Welcome back!");
          router.navigate("/(tabs)/home");
        }else{
                    Alert.alert("Error", data.message);
        }
      } else {
        // Handle login failure (e.g., incorrect credentials)
        Alert.alert(
          "Login Failed",
          data.message || "Please check your credentials"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/image.png")}
      resizeMode="cover"
      style={styles.Container}
    >
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <FontAwesome6
          name="money-bill-trend-up"
          size={35}
          color={Colors.light.primary}
        />
        <Text style={styles.title}>MoonBank</Text>
      </View>

      <View style={styles.TextInputStyle}>
        <MaterialCommunityIcons name="email-outline" size={24} color="grey" />
        <TextInput
          placeholder="example@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          selectionColor={"grey"}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.TextInputStyle}>
        <Feather name="lock" size={24} color="grey" />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={true}
          selectionColor={"grey"}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <ButtonComponent
        text={loading ? "Logging in..." : "Login"}
        bordered={false}
        onPress={handleLogin}
        disabled={loading}
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.light.primary,
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
  input: {
    color: "grey",
    width: "90%",
    paddingHorizontal: 10,
  },
});
