import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyles from "../utils/globalStyles";
import { textColor, white } from "../utils/colors";
import CustomStatusBar from "../components/CustomStatusBar";
import HomeHeader from "../components/HomeHeader";
import { addDeck } from "../actions";

class AddDeck extends Component {
  state = {
    title: "",
    showRequiredInputError: false,
    showUniqueNameError: false,
  };

  resetState = () => {
    this.setState({
      title: "",
      showRequiredInputError: false,
      showUniqueNameError: false,
    });
  };

  onSubmit = () => {
    const { decks, addDeck, goToDecks } = this.props;
    const { title } = this.state;

    const titleNoWhitespace = title.replace(/\s/g, "");

    // Check that a title has been entered
    if (!titleNoWhitespace.length) {
      this.setState({
        showRequiredInputError: true,
        showUniqueNameError: false,
      });
      return;
    }

    // Check that the title is not already in use
    const titleAlreadyUsed = Object.keys(decks).some((key) => {
      const deck = decks[key];
      return deck.title === title;
    });

    if (titleAlreadyUsed) {
      this.setState({
        showRequiredInputError: false,
        showUniqueNameError: true,
      });
      return;
    }

    addDeck(title);
    goToDecks();

    this.resetState();
  };

  onTitleChange = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomStatusBar />

        <View style={globalStyles.viewContainer}>
          <Text style={globalStyles.title}>Add Deck</Text>
          <Text style={styles.tagline}>Create a new deck of flashcards</Text>

          <Text style={styles.label}>Title</Text>
          <TextInput
            value={this.state.title}
            onChangeText={this.onTitleChange}
            style={globalStyles.textInput}
          />

          {this.state.showRequiredInputError && (
            <Text style={globalStyles.inputErrorText}>
              Please enter a title
            </Text>
          )}

          {this.state.showUniqueNameError && (
            <Text style={globalStyles.inputErrorText}>
              This title has already been used
            </Text>
          )}

          <TouchableOpacity
            onPress={this.onSubmit}
            style={globalStyles.btnPrimary}
          >
            <Text style={globalStyles.btnPrimaryText}>Create Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    addDeck: (title) => {
      const deckId = title.replace(/\s/g, "");
      const dateString = new Date().toISOString().split("T")[0];
      const timestamp = Math.round(new Date() / 1000);

      dispatch(
        addDeck({
          id: deckId,
          title: title,
          created: dateString,
          timestamp: timestamp,
          questions: [],
        })
      );
    },
    goToDecks: () => navigation.navigate("Decks"),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);

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
