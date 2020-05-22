import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Decks from "../views/Decks";
import AddDeck from "../views/AddDeck";

export default TabNavigation;

const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Decks"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#9400D3", margin: 20 }}
      >
        <Tab.Screen
          name="Decks"
          component={Decks}
          options={{
            tabBarLabel: "Decks",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cards-outline"
                size={30}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Add Deck"
          component={AddDeck}
          options={{
            tabBarLabel: "AddDeck",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
