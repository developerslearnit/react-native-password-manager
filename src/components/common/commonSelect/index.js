import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../../utils/themes/colors";
import fonts from "../../../utils/themes/fonts";
import { AntDesign } from "@expo/vector-icons";

const CommonSelectInput = ({ label, onItemClick, selectedItem }) => {
  return (
    <>
      {label && <Text style={styles.grayText}>{label}</Text>}

      <TouchableOpacity
        onPress={() => onItemClick()}
        style={styles.textInputContainer}
      >
        <Text style={[styles.textInput]}>{selectedItem}</Text>
        <AntDesign name="down" size={30} color={colors.grayText} />
      </TouchableOpacity>
    </>
  );
};

export default CommonSelectInput;

const styles = StyleSheet.create({
  grayText: {
    color: colors.grayText,
    textTransform: "uppercase",
    fontSize: fonts.size.font14,
    fontWeight: fonts.weight.bold,
  },
  textInputContainer: {
    marginTop: 5,
    paddingStart: 15,
    paddingEnd: 15,
    paddingVertical: 5,
    height: 50,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.grayText,
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "white",
    fontSize: fonts.size.font14,
  },
});
