import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import HomeHeader from "./components/HomeHeader";
import globalStyles from "./utils/globalStyles";
import tempData from "./utils/data";
import DeckCard from "./components/DeckCard";

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
        <View>
          <HomeHeader />
          <Text style={globalStyles.title}>Decks</Text>
          {Object.keys(tempData).map((key) => {
            const deck = tempData[key];
            return <DeckCard deck={deck} key={key} />;
          })}
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
});
