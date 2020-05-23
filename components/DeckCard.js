import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { white } from "../utils/colors";
import NavigationService from "../navigation/navigationService";

class DeckCard extends Component {
  handleDeckPress = () => {
    const { deck } = this.props;
    NavigationService.navigate("Deck", {
      deckId: deck.id,
    });
  };

  render() {
    const { deck, allowNavigation, navigation } = this.props;
    const cardCount = deck.questions.length;

    return (
      <TouchableOpacity
        disabled={!allowNavigation}
        onPress={this.handleDeckPress}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{deck.title}</Text>
            <Text style={styles.createdText}>Created: {deck.created}</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>Cards in deck : {cardCount}</Text>
              {cardCount === 1 ? <Text> card</Text> : <Text> cards</Text>}
            </View>
          </View>
        </View>
        {allowNavigation && (
          <FontAwesome
            name="chevron-right"
            style={styles.rightArrow}
            size={18}
          />
        )}
      </TouchableOpacity>
    );
  }
}

DeckCard.propTypes = {
  deck: PropTypes.object.isRequired,
  allowNavigation: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    padding: 16,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
  },
  createdText: {
    fontSize: 14,
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 16,
  },
  countText: {
    fontSize: 16,
  },
  countLabel: {
    marginLeft: 5,
    marginBottom: 2,
    fontSize: 16,
  },
  rightArrow: {},
});
export default DeckCard;
