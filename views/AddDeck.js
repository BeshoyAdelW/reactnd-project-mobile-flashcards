import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../utils/globalStyles";
import { textColor, white } from "../utils/colors";

export default function AddDeck() {
  return (
    <View style={globalStyles.viewContainer}>
      <Text style={globalStyles.title}>Add Deck</Text>
      <Text style={styles.tagline}>Create a new decks of flashcards</Text>

      <Text style={styles.label}>What is the title of your new deck?</Text>
      <TextInput style={styles.input} placeholder="Deck Title" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tagline: {
    color: textColor,
    fontSize: 16,
  },
  label: {
    marginTop: 32,
    marginBottom: 4,
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#9400D3",
  },
  buttonText: {
    color: white,
    fontSize: 14,
    textTransform: "uppercase",
  },
});
