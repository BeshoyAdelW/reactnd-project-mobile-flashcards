import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Decks from "./views/Decks";
import TabNavigation from "./components/TabNavigation";
import globalStyles from "./utils/globalStyles";

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
        <TabNavigation style={globalStyles} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
