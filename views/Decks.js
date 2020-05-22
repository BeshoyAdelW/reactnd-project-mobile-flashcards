import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, ScrollView } from "react-native";
import globalStyles from "../utils/globalStyles";
import tempData from "../utils/data";
import CustomStatusBar from "../components/CustomStatusBar";
import HomeHeader from "../components/HomeHeader";
import DeckCard from "../components/DeckCard";

class Decks extends Component {
  render() {
    const { decks } = this.props;
    return (
      <View>
        <CustomStatusBar />
        <ScrollView style={globalStyles.viewContainer}>
          <View>
            <HomeHeader />
            <Text style={globalStyles.title}>Decks</Text>
            {Object.keys(decks).map((key) => {
              const deck = decks[key];
              return <DeckCard deck={deck} key={key} />;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Decks);
