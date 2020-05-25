/**
 * @format
 */

import { name as appName } from "./app.json";

import { AppRegistry, YellowBox, NativeModules } from "react-native";
import App from "./App";

YellowBox.ignoreWarnings([
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Module RCTImageLoader",
  "Remote debugger",
]);

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

AppRegistry.registerComponent(appName, () => App);
