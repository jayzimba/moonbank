import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function page() {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <View style={{ marginBottom: 2 }}>
          <Text style={{ fontSize: 18, color: Colors.light }}>
            Contribution
          </Text>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ZMW</Text>
          <Text style={{ fontSize: 16, fontWeight: "400" }}>7,5239</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <FontAwesome6 name="money-bills" size={35} color="white" />
            <Text style={styles.cardText}>Contribute</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <FontAwesome5 name="hand-holding-usd" size={35} color="white" />
            <Text style={styles.cardText}>Get Loan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <FontAwesome name="clipboard" size={35} color="white" />
            <Text style={styles.cardText}>Statements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MaterialCommunityIcons
              name="account-group"
              size={35}
              color="white"
            />
            <Text style={styles.cardText}>Group</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flexDirection: "column",
    width: width / 2 - 25,
    height: width / 2 - 25,
    backgroundColor: Colors.light.primary,
    elevation: 7,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: { marginTop: 10, fontSize: 16, fontWeight: "bold", color: "#fff" },
});
