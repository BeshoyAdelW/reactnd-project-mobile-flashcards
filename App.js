import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { white } from "./utils/colors";

function CustomStatusBar({ ...props }) {
  return (
    <View>
      <StatusBar translucent {...props} />
    </View>
  );
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <CustomStatusBar />
        <View style={styles.headerPanel}>
          <View styles={styles.headerTextContainer}>
            <Text style={styles.headerText}>Mobile</Text>
            <Text style={styles.headerText}>Flashcards</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
