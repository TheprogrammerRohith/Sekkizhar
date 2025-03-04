import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Modal } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalSelector from "react-native-modal-selector";
import Ionicons from "react-native-vector-icons/Ionicons";

const toggleSelection = (item,setSelectedItem,setItemModalVisible) => {
  setSelectedItem(item); // Set selected caste
  setItemModalVisible(false); // Close modal after selection
};

const Location = ({ navigation,initialValues,isEditMode = false }) => {
  const validationSchema = Yup.object().shape({
    residence: Yup.string().required("Country of Residence is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City/Town/Village is required"),
    district: Yup.string().required("District is required"),
    town: Yup.string(),
    village: Yup.string(),
  });  

  const defaultValues = { residence: "", state: "", city: "", district: "", town: "", village: "" };
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState();
  const [districtModalVisible, setDistrictModalVisible] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState()

  const countryOptions =["India","Other Country - Permanent Resident","Other Country - Temporary Resident",]
  const districtOptions =[
    "Chennai" ,
    "Coimbatore" ,
    "Cuddalore" ,
    "Dharmapuri" ,
    "Dindigul" ,
    "Erode" ,
    "Kancheepuram" ,
    "Madurai" ,
    "Salem" ,
    "Thanjavur" ,
    "Tiruchirappali" ,
    "Vellore" ,
    "Villupuram" ,
    "Virudhunagar"
  ]

  return (
    <Formik
      initialValues={initialValues || defaultValues} // ✅ This ensures default values exist
      onSubmit={(values) => {
        if (isEditMode) {
          handleEdit(values); // Ensure `handleEdit` is defined
        } else {
          navigation.navigate("OtherInfo");
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScrollView style={{backgroundColor:'white'}}>
          <View style={styles.container}>

            {!isEditMode ? <Text style={styles.heading}>Location</Text> : <></>}

            <Text style={styles.label}>Country of Residence:</Text>
            <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setCountryModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedCountry ? selectedCountry : "Select Country"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={countryModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCountryModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={countryOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedCountry, setCountryModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedCountry === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCountryModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            {touched.residence && errors.residence && <Text style={styles.error}>{errors.residence}</Text>}

            <Text style={styles.label}>State:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your state"
              onChangeText={handleChange("state")}
              onBlur={handleBlur("state")}
              value={values.state}
            />
            {touched.state && errors.state && <Text style={styles.error}>{errors.state}</Text>}

            <Text style={styles.label}>City/Town/Village:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter City/Town/Village"
              onChangeText={handleChange("city")}
              onBlur={handleBlur("city")}
              value={values.city}
            />
            {touched.city && errors.city && <Text style={styles.error}>{errors.city}</Text>}

            {!isEditMode ? <Text style={styles.heading}>Nativity</Text> : <></>}

            <Text style={styles.label}>District:</Text>
            <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setDistrictModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedDistrict ? selectedDistrict : "Select District"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={districtModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setDistrictModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={districtOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedDistrict, setDistrictModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedDistrict === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDistrictModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
            {touched.district && errors.district && <Text style={styles.error}>{errors.district}</Text>}

            <Text style={styles.label}>Town:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your town"
              onChangeText={handleChange("town")}
              onBlur={handleBlur("town")}
              value={values.town}
            />

            <Text style={styles.label}>Village:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Village"
              onChangeText={handleChange("village")}
              onBlur={handleBlur("village")}
              value={values.village}
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
  container: { padding: 20, backgroundColor: 'white' },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5, 
    height: 45 
  },
  error: { color: "red", marginBottom: 10 },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 5, textAlign: 'center' },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: "80%",marginTop:20},
  optionText: { fontSize: 16, marginLeft: 5,flex:1,flexWrap:'wrap' },
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

export default Location;
