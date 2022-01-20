import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import fonts from "../../utils/themes/fonts";
import colors from "../../utils/themes/colors";
const { width, height } = Dimensions.get("window");

const CommonHeader = ({ navigation, showLogout }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}
      >
        <AntDesign name="left" size={30} color={colors.gray500} />
        {Platform.OS === "ios" ? (
          <Text style={styles.headerText}>Back</Text>
        ) : (
          <Text style={styles.headerText}></Text>
        )}
      </TouchableOpacity>
      {showLogout && (
        <TouchableOpacity>
          <Text style={{ color: "white" }}>LOGOUT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: Platform.OS === "android" ? 20 : 10,
    height: 55,
    width: width,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
  },
  backBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: colors.gray500,
    fontSize: fonts.size.font16,
  },
});
