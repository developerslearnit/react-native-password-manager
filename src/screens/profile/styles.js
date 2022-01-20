import { StyleSheet } from "react-native";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";

export const styles = StyleSheet.create({
  profileTop: {
    justifyContent: "center",
    alignItems: "center",
  },

  profileAvatar: {
    width: 150,
    height: 150,
    borderWidth: 6,
    borderColor: colors.cblue,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: fonts.size.font22,
    color: "#dedede",
    letterSpacing: 2,
  },
  profileEmail: {
    fontSize: fonts.size.font12,
    color: "grey",
    letterSpacing: 1.3,
  },
});
