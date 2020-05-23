import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Decks from "../views/Decks";
import Deck from "../views/Deck";
import AddDeck from "../views/AddDeck";
import AddCard from "../views/AddCard";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Decks" component={TabNavigation} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddDeck" component={AddDeck} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
