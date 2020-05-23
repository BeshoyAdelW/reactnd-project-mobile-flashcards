import { StyleSheet } from "react-native";
import { white, violet, textRed } from "./colors";

const globalStyles = StyleSheet.create({
  viewContainer: {
    margin: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 40,
  },
  btnPrimary: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: violet,
  },
  btnSecondary: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 50,
    borderColor: violet,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnPrimaryText: {
    color: white,
    fontSize: 14,
    textTransform: "uppercase",
  },
  btnSecondaryText: {
    color: violet,
    fontSize: 14,
    textTransform: "uppercase",
  },
  textInput: {
    height: 50,
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
  },
});

export default globalStyles;
