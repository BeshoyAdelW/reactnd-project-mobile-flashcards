import * as React from "react";
import { StackActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current.navigate(name, params);
}

// let _navigator;

// function push(navigatorRef) {
//   _navigator = navigatorRef;
// }

// function navigate(routeName, params) {
//   _navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params
//     })
//   );
// }

export function push(...args) {
  navigationRef.current.dispatch(StackActions.push(...args));
}

export default {
  navigate,
  push,
};
