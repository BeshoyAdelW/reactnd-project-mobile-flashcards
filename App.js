import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import HomeHeader from "./components/HomeHeader";

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
        <HomeHeader />
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
