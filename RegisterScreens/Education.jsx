import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalSelector from "react-native-modal-selector";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const defaultValues={education: "", inDetail: "", occupation: ""};

const toggleSelection = (item,setSelectedItem,setItemModalVisible) => {
  setSelectedItem(item); // Set selected caste
  setItemModalVisible(false); // Close modal after selection
};


const Education = ({ navigation,initialValues,isEditMode = false }) => {

  

  const [educationModalVisible, setEducationModalVisible] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState();

  const educationOptions=[
    "Engineering" ,
    "Medicine",
    "Computer Science",
    "Arts/Other Science",
    "Commerce",
    "Law",
    "Diploma"
  ]

  const validationSchema = Yup.object().shape({
    education: Yup.string().required("education is required"),
    inDetail: Yup.string().required("inDetail is required"),
    occupation: Yup.string().required("Occupation is required"),
  });
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values) => {
        //validationSchema=validationSchema
        if (isEditMode) {
          handleEdit(values); // Call edit function
        } else {
          navigation.navigate("Location"); // Navigate to the next step in registration
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <ScrollView style={{backgroundColor:'white'}}>
          <View style={styles.container}>
            {!isEditMode ? <Text style={styles.heading}>Education</Text> : <></>}
            
            <Text style={styles.label}>Education:</Text>
            <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setEducationModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedEducation ? selectedEducation : "Select Education"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={educationModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setEducationModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={educationOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedEducation, setEducationModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedEducation === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setEducationModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

            <Text style={styles.label}>In Detail:</Text>
            <TextInput
              style={styles.input}
              placeholder="About your education..."
              onChangeText={handleChange("inDetail")}
              onBlur={handleBlur("inDetail")}
              value={values.inDetail}
            />

            <Text style={styles.label}>Occupation:</Text>
            <TextInput
              style={styles.input}
              placeholder="About your job..."
              multiline
              numberOfLines={4}
              onChangeText={handleChange("occupation")}
              onBlur={handleBlur("occupation")}
              value={values.occupation}
            />

            {!isEditMode ? (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5, height: 45 },
  dropdown: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, marginBottom: 10, height: 45, justifyContent: "center", paddingHorizontal: 10 },
  dropdownText: { padding: 10, fontSize: 16, color: "black" },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 5, textAlign: "center" },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  button: { backgroundColor: "orange", padding: 10, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: "80%",marginTop:20},
  optionText: { fontSize: 16, marginLeft: 5 },
  checkboxRow: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  closeButton: { marginTop: 5, alignItems: "center" },
  closeText: { fontSize: 16, color: "blue" },
  selectionBox: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    borderRadius: 5,
  },selectionText: { fontSize: 16, color: "black" },
});

export default Education;
