import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { receiveDecks } from "./actions/index";
import { fetchAllDecks } from "./utils/data";
import StackNavigation from "./navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigation/navigationService";

export default class App extends Component {
  store = createStore(reducer, middleware);

  state = {
    prerequisitesLoaded: false,
  };

  async componentDidMount() {
    const loadDecksPromise = fetchAllDecks();
    Promise.all([loadDecksPromise]).then((values) => {
      const decks = values[0];
      this.store.dispatch(receiveDecks(decks));

      this.setState({
        prerequisitesLoaded: true,
      });
    });
  }

  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Provider store={this.store}>
          <View style={styles.appContainer}>
            {this.state.prerequisitesLoaded && <StackNavigation />}
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
