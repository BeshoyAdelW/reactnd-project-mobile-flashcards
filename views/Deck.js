import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../utils/globalStyles";
import NavigationService from "../navigation/navigationService";
import DeckCard from "../components/DeckCard";

class Deck extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={[globalStyles.viewContainer, { marginTop: 8 }]}>
        <DeckCard deck={deck} allowNavigation={false} />

        <Text style={globalStyles.title}>Deck</Text>

        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate("AddCard", {
              deckId: deck.id,
            });
          }}
          style={globalStyles.btnSecondary}
        >
          <Text style={globalStyles.btnSecondaryText}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.btnPrimary}>
          <Text style={globalStyles.btnPrimaryText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  return {
    deckId,
    deck: decks[deckId],
  };
}

export default connect(mapStateToProps)(Deck);
