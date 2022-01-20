import { StyleSheet } from "react-native";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  grayText: {
    color: colors.grayText,
    textTransform: "uppercase",
    fontSize: fonts.size.font12,
  },
  passwordContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.secondary,
    //height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  passwordText: {
    color: "white",
    fontSize: fonts.size.font20,
    letterSpacing: 1.3,
  },
  settingsContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  settingsText: {
    color: "white",
    textAlign: "left",
    fontSize: fonts.size.font12,
    letterSpacing: 1.3,
  },
  btn: {
    backgroundColor: colors.cblue,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 10,
  },
});
