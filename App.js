import React from "react";
import { ReactNode } from "react";

import RootProvider from "./App/Containers/RootContainer";
import AppNavigation from "./App/Navigation/AppNavigation";
import CodePush from "react-native-code-push";

const App: ReactNode = () => {
  return (
    <RootProvider>
      <AppNavigation />
    </RootProvider>
  );
};

export default CodePush(App);
