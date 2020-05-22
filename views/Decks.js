import React from "react";
import { Text, View, ScrollView } from "react-native";
import globalStyles from "../utils/globalStyles";
import tempData from "../utils/data";
import CustomStatusBar from "../components/CustomStatusBar";
import HomeHeader from "../components/HomeHeader";
import DeckCard from "../components/DeckCard";

export default function Decks() {
  return (
    <View>
      <CustomStatusBar />
      <ScrollView style={globalStyles.viewContainer}>
        <View>
          <HomeHeader />
          <Text style={globalStyles.title}>Decks</Text>
          {Object.keys(tempData).map((key) => {
            const deck = tempData[key];
            return <DeckCard deck={deck} key={key} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
