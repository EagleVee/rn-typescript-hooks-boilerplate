// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
import { StyleSheet } from "react-native";
import { STATUS_BAR_HEIGHT } from "../Config/Dimens";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292b2c",
  },
  middle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
