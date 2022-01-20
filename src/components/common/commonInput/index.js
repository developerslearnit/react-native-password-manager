import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../../utils/themes/colors";
import fonts from "../../../utils/themes/fonts";

const CommonInput = ({
  label,
  password,
  multiline,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <>
      {label && <Text style={styles.grayText}>{label}</Text>}

      <View
        style={[styles.textInputContainer, { height: multiline ? 75 : 60 }]}
      >
        <TextInput
          secureTextEntry={password ? true : false}
          multiline={multiline ? true : false}
          style={[styles.textInput]}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
        />
      </View>
    </>
  );
};

export default CommonInput;

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
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: colors.secondary,
    alignItems: "flex-start",
    justifyContent: "center",
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
