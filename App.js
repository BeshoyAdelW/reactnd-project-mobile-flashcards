import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TabNavigation from "./components/TabNavigation";
import CustomStatusBar from "./components/CustomStatusBar";
import globalStyles from "./utils/globalStyles";

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
