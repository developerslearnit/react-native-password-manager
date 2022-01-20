import React from "react";
import { View, Text } from "react-native";
import CommonHeader from "../../components/common/commonHeader";
import CommonWrap from "../../components/common/commonWrap";
import PageTitle from "../../components/common/pageTitle";

const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <CommonWrap>
        <CommonHeader showLogout navigation={navigation} />
        <PageTitle title="Settings" />
      </CommonWrap>
    </>
  );
};

export default SettingsScreen;
