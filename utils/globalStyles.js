import { StyleSheet } from "react-native";
import { textColor } from "./colors";

const globalStyles = StyleSheet.create({
  viewContainer: {
    margin: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 40,
    color: textColor,
  },
});

export default globalStyles;
