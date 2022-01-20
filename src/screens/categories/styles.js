import { StyleSheet } from "react-native";
import fonts from "../../utils/themes/fonts";
import colors from "../../utils/themes/colors";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },

  searchBar: {
    backgroundColor: colors.secondary,

    height: 50,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginStart: 15,
    marginEnd: 15,
  },
  searchTextInput: {
    flex: 1,
    color: colors.gray500,
    marginLeft: 10,
    height: 40,
    paddingVertical: 3,
  },
});
