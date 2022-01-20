import React from "react";
import { View, Text, Image } from "react-native";
import CommonHeader from "../../components/common/commonHeader";
import CommonWrap from "../../components/common/commonWrap";
import { styles } from "./styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <CommonWrap>
        <CommonHeader showLogout navigation={navigation} />
        <View style={styles.profileTop}>
          <Image
            style={styles.profileAvatar}
            source={{
              uri: "https://avatars.githubusercontent.com/u/19668944?s=400&u=716f672327e3586cf503a66b7bc8d55f2943b6bf&v=4",
            }}
          />
          <Text style={styles.profileName}>Mark Adesina</Text>
          <Text style={styles.profileEmail}>mark2kk@gmail.com</Text>
        </View>
      </CommonWrap>
    </>
  );
};

export default ProfileScreen;
