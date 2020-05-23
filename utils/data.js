import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "MobileFlashcards:Decks";

/**
 * Get's all the decks of flashcards.
 * Using an async data approach with temp data. Could mature to REST API later.
 */
export async function fetchAllDecks() {
  // Delete this after running the changed tempData
  // for the first time:
  AsyncStorage.clear();
  // Get all the decks from AsyncStorage. If there aren't any then use the temp data
  // as the default set of decks.
  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(tempData));
    return tempData;
  }
}

const tempData = {
  D1: {
    id: "D1",
    title: "Deck 1",
    timestamp: 1563796800,
    created: "2020-05-22",
    questions: [
      {
        question: "Q1?",
        answer: "A1",
      },
      {
        question: "Q2",
        answer: "A2",
      },
    ],
  },
  D2: {
    id: "D2",
    title: "Deck 2",
    timestamp: 1563710400,
    created: "2020-05-23",
    questions: [
      {
        question: "Q1",
        answer: "A1",
      },
    ],
  },
};
