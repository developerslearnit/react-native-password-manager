import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";

const Category = ({ category }) => {
  return (
    <TouchableOpacity style={styles.catItem}>
      <Image
        source={{
          uri: category.icon,
        }}
        style={styles.catIcon}
      />
      <Text style={styles.catText}>{category.name}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  catItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
    backgroundColor: colors.secondary,
    paddingVertical: Platform.OS === "ios" ? 6 : 10,
    paddingHorizontal: 9,
    borderRadius: 7,
  },
  catIcon: {
    height: 40,
    width: 35,
    // borderRadius: 20,
    resizeMode: "contain",
    marginRight: 20,
  },
  catText: {
    color: "white",
    fontSize: fonts.size.font14,
    textTransform: "uppercase",
  },
});
