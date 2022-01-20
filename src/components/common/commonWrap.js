import React from "react";
import { View, Text } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import colors from "../../utils/themes/colors";

const CommonWrap = ({ children }) => {
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: colors.primary,
          flex: 1,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default CommonWrap;
