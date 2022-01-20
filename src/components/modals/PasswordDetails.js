import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import CommonWrap from "../common/commonWrap";
import colors from "../../utils/themes/colors";
import fonts from "../../utils/themes/fonts";
import Category from "../category";

const PasswordDetails = ({ categories }) => {
  const [search, setSearch] = useState("");

  return (
    <Modal transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.categoryModal}>
          <View style={styles.modalHead}>
            <Text style={styles.headerText}>Select Category</Text>
          </View>
          <View style={styles.catItem}>
            <FlatList
              data={categories.filter((value) => {
                if (search == "") {
                  return value;
                } else {
                  return value.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
              })}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Category category={item} />}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PasswordDetails;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    marginTop: 22,
  },
  categoryModal: {
    marginTop: "10%",
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
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
});
