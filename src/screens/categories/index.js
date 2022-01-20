import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import CommonHeader from "../../components/common/commonHeader";
import CommonWrap from "../../components/common/commonWrap";
import { Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/themes/colors";
import { styles } from "./styles";
import fonts from "../../utils/themes/fonts";
import Category from "../../components/category";
import PageTitle from "../../components/common/pageTitle";
import { useDispatch } from "react-redux";
import { setAppCategories } from "../../redux/feature/categorySlice";

const data = [
  {
    id: "1",
    name: "Apple",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482908/apple_iragiv.png",
  },
  {
    id: "2",
    name: "Blogger",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482908/blogger_zkuaiv.png",
  },
  {
    id: "3",
    name: "Dropbox",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482909/dropbox_jkbtcm.png",
  },
  {
    id: "4",
    name: "Gmail",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482908/gmail_ojo1gg.png",
  },
  {
    id: "5",
    name: "Heroku",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482909/heroku_d9aguh.png",
  },
  {
    id: "6",
    name: "Outlook",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482909/outlook_exlfpf.png",
  },
  {
    id: "7",
    name: "Skype",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482909/skype_puobi8.png",
  },
  {
    id: "8",
    name: "Slack",
    icon: "https://res.cloudinary.com/panachora/image/upload/v1637482909/slack_kzzgyv.png",
  },
];

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setCategories(data);
    dispatch(setAppCategories(data));
    //setFilteredCategories(data);
  }, []);

  const searchItem = (text) => {
    //if (text) {
    setSearch(text);
    //}
  };

  return (
    <CommonWrap>
      <CommonHeader navigation={navigation} />
      <PageTitle title="Categories" />
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={20} color={colors.gray500} />
        <TextInput
          style={styles.searchTextInput}
          value={search}
          onChangeText={(text) => searchItem(text)}
          placeholder="Search"
          autoComplete="off"
          placeholderTextColor={colors.gray500}
          placeholderStyle={{ fontSize: fonts.size.font14 }}
        />
      </View>
      <View style={{ paddingHorizontal: 15, flex: 1 }}>
        <FlatList
          data={categories.filter((value) => {
            if (search == "") {
              return value;
            } else {
              return value.name.toLowerCase().includes(search.toLowerCase());
            }
          })}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Category category={item} />}
        />
      </View>
    </CommonWrap>
  );
};

export default CategoriesScreen;
