import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import i18n from "i18n-js";
import BrowseDeckScreen from "../Containers/BrowseDeckScreen";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function AppTab(props) {
  return (
    <Tab.Navigator initialRouteName="StrokeOrderScreen">
      <Tab.Screen
        name="BrowseDeckScreen"
        component={BrowseDeckScreen}
        options={{ title: "Deck List" }}
      />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="AppTab">
        <Stack.Screen name="AppTab" component={AppTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
