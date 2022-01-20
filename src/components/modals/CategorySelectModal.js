import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";
import { AntDesign } from "@expo/vector-icons";

const CategorySelectModal = ({ categories, vissible, onItemSelect }) => {
  const [search, setSearch] = useState("");

  const searchItem = (text) => {
    //if (text) {
    setSearch(text);
    //}
  };

  const onItemSelected = (item) => {
    onItemSelect(item);
  };

  return (
    <Modal visible={vissible} transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.categoryModal}>
          <View style={styles.modalHead}>
            <Text style={styles.headerText}>Select Category</Text>
          </View>
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
          <ScrollView style={{ flex: 1 }}>
            {categories
              .filter((value) => {
                if (search == "") {
                  return value;
                } else {
                  return value.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
              })
              .map((category) => (
                <TouchableOpacity
                  onPress={() => onItemSelected(category)}
                  key={category.id}
                  style={styles.catItem}
                >
                  <Image
                    source={{
                      uri: category.icon,
                    }}
                    style={styles.catIcon}
                  />
                  <Text style={styles.catText}>{category.name}</Text>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CategorySelectModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    marginTop: 22,
  },
  categoryModal: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: "10%",
    //backgroundColor: "white",
    flex: 1,
    backgroundColor: colors.grayText,
  },
  modalHead: {
    backgroundColor: colors.grayText,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  headerText: {
    color: "white",
    fontSize: fonts.size.font16,
    fontWeight: fonts.weight.bold,
  },
  catItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    //marginTop: 5,
    paddingVertical: Platform.OS === "ios" ? 6 : 15,
    paddingHorizontal: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.primary,
  },
  catIcon: {
    height: 40,
    width: 35,
    // borderRadius: 20,
    resizeMode: "contain",
    marginRight: 20,
  },
  catText: {
    color: "white",
    fontSize: fonts.size.font14,
    textTransform: "uppercase",
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    paddingVertical: 3,
    color: "white",
  },
  searchBar: {
    backgroundColor: colors.secondary,
    height: 50,
    borderWidth: 1,
    borderBottomColor: colors.grayText,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
