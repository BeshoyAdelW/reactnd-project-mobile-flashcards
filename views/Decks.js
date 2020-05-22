import React from "react";
import { Text, View } from "react-native";
import globalStyles from "../utils/globalStyles";
import tempData from "../utils/data";

import HomeHeader from "../components/HomeHeader";
import DeckCard from "../components/DeckCard";

export default function Decks() {
  return (
    <View style={globalStyles.viewContainer}>
      <HomeHeader />
      <Text style={globalStyles.title}>Decks</Text>
      {Object.keys(tempData).map((key) => {
        const deck = tempData[key];
        return <DeckCard deck={deck} key={key} />;
      })}
    </View>
  );
}
