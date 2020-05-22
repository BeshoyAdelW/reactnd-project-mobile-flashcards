import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { white } from "../utils/colors";

export default function HomeHeader() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.headerPanel}>
        <View styles={styles.headerTextContainer}>
          <Text style={styles.headerText}>Mobile</Text>
          <Text style={styles.headerText}>Flashcards</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    marginTop: 20,
    backgroundColor: "#9400D3",
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  headerText: {
    textAlign: "center",
    color: white,
    fontSize: 24,
  },
  headerTagline: {
    textAlign: "center",
    marginTop: 10,
    color: white,
    fontSize: 12,
  },
});
