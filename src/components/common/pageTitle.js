import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

import fonts from "../../utils/themes/fonts";

const PageTitle = ({ title }) => {
  return (
    <View style={styles.catHeaderWrap}>
      <Text style={styles.headerText}>{title}</Text>
      <Avatar
        rounded
        source={{
          uri: "https://avatars.githubusercontent.com/u/19668944?s=400&u=716f672327e3586cf503a66b7bc8d55f2943b6bf&v=4",
        }}
      />
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  catHeaderWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: fonts.weight.full,
    fontSize: fonts.size.font14,
    textTransform: "uppercase",
  },
});
