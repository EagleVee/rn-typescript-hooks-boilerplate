import React, { Component, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/BrowseDeckScreenStyle";
import { LanguageContext } from "../Providers/LanguageProvider";

function BrowseDeckScreen(props) {
  const language = useContext(LanguageContext);
  const { state, dispatch, setLanguage } = language;
  return (
    <View style={styles.middle}>
      <Text>THIS APPLICATION IS RUNNING IN {state.language}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: "SET_LANGUAGE",
            payload: "en",
          });
        }}>
        <Text>CHANGE LANGUAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setLanguage("vi");
        }}>
        <Text>CHANGE LANGUAGE V2</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BrowseDeckScreen;
