import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TabNavigation from "./components/TabNavigation";
import CustomStatusBar from "./components/CustomStatusBar";
import globalStyles from "./utils/globalStyles";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { receiveDecks } from "./actions/index";
import { fetchAllDecks } from "./utils/data";

export default class App extends Component {
  store = createStore(reducer);

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
      <Provider store={this.store}>
        <View style={styles.appContainer}>
          {this.state.prerequisitesLoaded && (
            <TabNavigation style={globalStyles} />
          )}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
