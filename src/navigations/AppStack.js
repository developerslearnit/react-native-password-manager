import React, { useRef } from "react";
import CategoriesScreen from "../screens/categories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PasswordGeneratorScreen from "../screens/tools";
import colors from "../utils/themes/colors";

import {
  MaterialCommunityIcons,
  Octicons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileScreen from "../screens/profile";
import SettingsScreen from "../screens/settings";
import NewPasswordScreen from "../screens/password";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <>
      <Tab.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: colors.primary,
            borderTopWidth: 0,
            //position: "absolute",
            //bottom: Platform.OS === "ios" ? 25 : 20,
            //marginHorizontal: 20,
            height: 60,
            // borderRadius: 10,
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconStyle}>
                <MaterialCommunityIcons
                  name="shield-outline"
                  size={20}
                  color={focused ? colors.cblue : colors.grayText}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="PasswordGenerator"
          component={PasswordGeneratorScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconStyle}>
                <Octicons
                  name="settings"
                  size={25}
                  color={focused ? colors.cblue : colors.grayText}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              // <TouchableOpacity>
              <View style={styles.actionBtn}>
                <AntDesign name="plus" size={24} color="white" />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconStyle}>
                <Feather
                  name="user"
                  size={25}
                  color={focused ? colors.cblue : colors.grayText}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconStyle}>
                <AntDesign
                  name="setting"
                  size={25}
                  color={focused ? colors.cblue : colors.grayText}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>

      <Animated.View
        style={{
          backgroundColor: colors.cblue,
          width: getWidth() - 22,
          position: "absolute",
          height: 1,
          bottom: Platform.OS === "ios" ? 57 : 58,
          left: 35,
          borderRadius: 50,
          transform: [
            {
              translateX: tabOffsetValue,
            },
          ],
        }}
      ></Animated.View>
    </>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width;
  width = width - 40;
  return width / 5;
}

export default AppStack;

const styles = StyleSheet.create({
  iconStyle: {
    position: "absolute",
    top: Platform.select({
      ios: "50%",
      android: "30%",
    }),
  },
  actionBtn: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: colors.cblue,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: Platform.select({
    //   ios: "10%",
    //   android: "60%",
    // }),
  },
});
