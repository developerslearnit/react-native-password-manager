import React from "react";
import { View, Text, Switch, Platform, TouchableOpacity } from "react-native";
import CommonHeader from "../../components/common/commonHeader";
import CommonWrap from "../../components/common/commonWrap";
import PageTitle from "../../components/common/pageTitle";
import Slider from "@react-native-community/slider";
import { styles } from "./styles";
import colors from "../../utils/themes/colors";

const PasswordGeneratorScreen = ({ navigation }) => {
  const [sliderValue, setSliderValue] = React.useState(8);
  const [includeNumber, setIncludeNumber] = React.useState(true);
  const [includeLetters, setIncludeLetters] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const toggleIncludeNumSwitch = () =>
    setIncludeNumber((previousState) => !previousState);

  const toggleIncludeLettersSwitch = () =>
    setIncludeLetters((previousState) => !previousState);

  const toggleIncludeSymbolsSwitch = () =>
    setIncludeSymbols((previousState) => !previousState);

  const generatePassword = () => {
    let password = "";
    let computedPassword = "";
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$&*()_";

    password = alphabets;

    if (includeNumber) {
      password += numbers;
    }

    if (includeLetters) {
      password += lowercase;
    }

    if (includeSymbols) {
      password += symbols;
    }

    for (let i = 0; i < sliderValue; i++) {
      computedPassword += password.charAt(
        Math.floor(Math.random() * password.length)
      );
    }
    setPassword(computedPassword);
  };

  return (
    <>
      <CommonWrap>
        <CommonHeader navigation={navigation} />
        <PageTitle title="Generate Password" />
        <View style={styles.container}>
          <Text style={styles.grayText}>Generated Password</Text>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>{password}</Text>
          </View>
          <Text style={[styles.grayText, { marginTop: 20 }]}>
            Length : {sliderValue}
          </Text>
          <View style={styles.settingsContainer}>
            <Slider
              style={{ width: "100%", height: 20 }}
              minimumValue={0}
              maximumValue={32}
              value={sliderValue}
              minimumTrackTintColor={colors.cblue}
              maximumTrackTintColor={colors.sliderMaxTintColor}
              thumbTintColor="white"
              onValueChange={(value) => setSliderValue(value)}
              step={1}
            />
          </View>

          <Text style={[styles.grayText, { marginTop: 15 }]}>SETTINGS</Text>
          <View
            style={[
              styles.settingsContainer,
              { paddingVertical: Platform.OS === "android" ? 5 : 13 },
            ]}
          >
            <Text style={styles.settingsText}>Include numbers</Text>
            <Switch
              trackColor={{ false: "#14244c", true: "#167af6" }}
              thumbColor={includeNumber ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleIncludeNumSwitch}
              value={includeNumber}
            />
          </View>
          <View
            style={[
              styles.settingsContainer,
              {
                paddingVertical: Platform.OS === "android" ? 5 : 13,
              },
            ]}
          >
            <Text style={styles.settingsText}>Include lowercase</Text>
            <Switch
              trackColor={{ false: "#14244c", true: "#167af6" }}
              thumbColor={includeLetters ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleIncludeLettersSwitch}
              value={includeLetters}
            />
          </View>

          <View
            style={[
              styles.settingsContainer,
              { paddingVertical: Platform.OS === "android" ? 5 : 13 },
            ]}
          >
            <Text style={styles.settingsText}>Include symbols</Text>
            <Switch
              trackColor={{ false: "#14244c", true: "#167af6" }}
              thumbColor={includeSymbols ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleIncludeSymbolsSwitch}
              value={includeSymbols}
            />
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.btn}
            onPress={generatePassword}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              GENERATE PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </CommonWrap>
    </>
  );
};

export default PasswordGeneratorScreen;
