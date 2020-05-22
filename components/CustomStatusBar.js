import React from "react";
import { View, StatusBar } from "react-native";
import Constants from "expo-constants";

export default function CustomStatusBar({ ...props }) {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent {...props} />
    </View>
  );
}
