import { StyleSheet } from "react-native";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },

  btn: {
    backgroundColor: colors.cblue,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    marginTop: 20,
    borderRadius: 6,
  },
});
