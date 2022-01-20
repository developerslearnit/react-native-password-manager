import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import CommonHeader from "../../components/common/commonHeader";
import CommonInput from "../../components/common/commonInput";
import CommonSelectInput from "../../components/common/commonSelect";
import CommonWrap from "../../components/common/commonWrap";
import PageTitle from "../../components/common/pageTitle";
import CategorySelectModal from "../../components/modals/CategorySelectModal";
import { selectCategories } from "../../redux/feature/categorySlice";
import { styles } from "./styles";

const validationSchema = yup.object().shape({
  categoryId: yup.string().required("Category id is required"),
  title: yup.string().required("Title is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const NewPasswordScreen = ({ navigation }) => {
  const categories = useSelector(selectCategories);
  const [selectVisible, setSelectVisible] = useState(false);
  const [selectedCategory, setSelectedategory] = useState("");

  const formValues = {
    categoryId: "",
    title: "",
    username: "",
    password: "",
    notes: "",
  };

  const onItemSelect = (item) => {
    setSelectedategory(item);
    setSelectVisible(false);
  };

  const onDropDownClicked = () => {
    setSelectVisible(true);
  };

  const onButtonPress = (form) => {
    console.log("form", form);
  };

  return (
    <>
      <CommonWrap>
        <CommonHeader navigation={navigation} />
        <PageTitle title="Add New Password" />
        <ScrollView style={styles.container}>
          <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => onButtonPress(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              setFieldValue,
              dirty,
              isValid,
            }) => (
              <KeyboardAvoidingView>
                <CommonSelectInput
                  label="Category"
                  onItemClick={onDropDownClicked}
                  selectedItem={selectedCategory.name}
                />
                <CommonInput
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  value={values.title}
                  label="Title"
                />
                <CommonInput
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                  label="Email / Username"
                />

                <CommonInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  label="Password"
                  password
                />
                <CommonInput
                  onChangeText={handleChange("notes")}
                  onBlur={handleBlur("notes")}
                  value={values.notes}
                  label="Notes"
                  multiline
                />

                <CategorySelectModal
                  categories={categories}
                  vissible={selectVisible}
                  onItemSelect={(item) => {
                    setSelectedategory(item);
                    setFieldValue("categoryId", item.id);
                    setSelectVisible(false);
                  }}
                />
                <TouchableOpacity
                  style={styles.btn}
                  disabled={!dirty || !isValid}
                  onPress={handleSubmit}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    SAVE PASSWORD
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            )}
          </Formik>
          <View style={{ height: 66 }}></View>
        </ScrollView>
      </CommonWrap>
    </>
  );
};

export default NewPasswordScreen;
