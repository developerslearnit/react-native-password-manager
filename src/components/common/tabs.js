import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
//Octicons
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";
import { Divider } from "react-native-elements";
const BottomTabs = () => {
  return (
    <>
      <Divider
        style={{ marginBottom: 10 }}
        orientation="vertical"
        width={0.5}
        color={colors.cblue}
      />

      <View style={styles.tabWrap}>
        <TouchableOpacity>
          <View style={styles.tabIconWrap}>
            <MaterialCommunityIcons
              name="shield-outline"
              size={30}
              color={colors.cblue}
            />
            <Text style={[styles.tabText, { color: colors.cblue }]}>Vault</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.tabIconWrap}>
            <MaterialCommunityIcons
              name="shield-outline"
              size={30}
              color={colors.gray300}
            />
            <Text style={styles.tabText}>Vault</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.tabIconWrap}>
            <MaterialCommunityIcons
              name="shield-outline"
              size={30}
              color={colors.gray300}
            />
            <Text style={styles.tabText}>Vault</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.tabIconWrap}>
            <MaterialCommunityIcons
              name="shield-outline"
              size={30}
              color={colors.gray300}
              style={styles.icon}
            />
            <Text style={styles.tabText}>Vault</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabWrap: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
    paddingBottom: 10,
    position: "relative",
  },
  tabText: {
    color: colors.gray300,
    fontSize: fonts.size.font12,
    textAlign: "center",
    fontWeight: fonts.weight.normal,
  },
  tabIconWrap: {
    alignItems: "center",
    alignContent: "center",
  },
});
