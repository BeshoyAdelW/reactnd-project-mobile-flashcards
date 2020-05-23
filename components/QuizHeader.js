import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, Image } from "react-native";
import { white, violet } from "../utils/colors";

export default function QuizHeader(props) {
  return (
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>Quiz Time!</Text>
      <Text style={styles.countText}>
        {props.currentQuestionIndex + 1} / {props.totalQuestions}
      </Text>
    </View>
  );
}

QuizHeader.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    height: 130,
    borderRadius: 10,
    backgroundColor: violet,
  },
  headerTextContainer: {
    flex: 1,
    // backgroundColor: '#123456',
    flexDirection: "column", // Swap from row back to the default of column
  },
  headerText: {
    color: white,
    fontSize: 32,
  },
  countText: {
    marginTop: 24,
    fontSize: 26,
    color: white,
  },
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
