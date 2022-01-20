import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppRoute from "./src/navigations/AppRoute";
import colors from "./src/utils/themes/colors";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />

        <StatusBar style="light" backgroundColor={colors.secondary} />
      </Provider>
    </>
  );
}
