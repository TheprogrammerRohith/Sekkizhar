import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from "formik";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';
import Ionicons from "react-native-vector-icons/Ionicons";

const defaultValues = {
  maritalStatus: "",
  haveChildren: "",
  livingTogether: "",
  sevvaiDosham: "",
  gothram: "",
  raasi_natchatram: "",
  laknam: "",
  horoscopeMatch: "",
};

const raasiOptions=[
  "Mesham - Aswini",
  "Mesham - Barani", 
  "Mesham - Karthigai", 
"Rishabam - Karthigai", 
  "Rishabam - Rohini", 
"Rishabam - Mirugashirisam", 
"Midhunam - Mirugashirisam", 
"Midhunam - Tiruvathirai", 
"Midhunam - Punarpoosam" ,
"Kadagam - Punarpoosam", 
"Kadagam - Poosam" ,
"Kadagam - Ayilyam",
"Simmam - Magam", 
"Simmam - Pooram", 
"Simmam - Uthiram", 
"Kanni - Uthiram", 
"Kanni - Astham", 
"Kanni - Chithirai", 
"Thulam - Chithirai",
"Thulam - Swathi", 
"Thulam - Visagam", 
"Viruchigam - Visagam", 
"Viruchigam - Anusham", 
"Viruchigam - Kettai", 
"Thanusu - Moolam", 
"Thanusu - Puraadam", 
"Thanusu - Uthiradam", 
"Magaram - Uthiradam", 
"Magaram - Tiruvonam", 
"Magaram - Avittam", 
"Kumbam - Avittam", 
"Kumbam - Sadayam", 
"Kumbam - Pooratadhi", 
"Meenam - Pooratadhi", 
"Meenam - Uthiratadhi", 
"Meenam - Revathi"
]

const toggleSelection = (item,setSelectedItem,setItemModalVisible) => {
  setSelectedItem(item); // Set selected caste
  setItemModalVisible(false); // Close modal after selection
};

export default function OtherInfo({ navigation,initialValues,isEditMode = false }) {
  const [raasiModalVisible, setRaasiModalVisible] = useState(false);
  const [selectedRaasi, setSelectedRaasi] = useState()
  
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values) => {
        if (isEditMode) {
          handleEdit(values); // Call edit function
        } else {
          navigation.navigate("FamilyInfo"); // Navigate to the next step in registration
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <ScrollView style={{backgroundColor:'white'}}>
          <View style={styles.container}>
            {!isEditMode ? <Text style={styles.heading}>Other Info</Text> : <></>}
            
            <Text style={styles.label}>Marital Status:</Text>
            <View style={styles.radioContainer}>
              {["UnMarried", "Divorsed", "Widowed", "Seperated", "Annulled"].map((status) => (
                <TouchableOpacity
                  key={status}
                  style={[
                    styles.radioButton,
                    values.maritalStatus === status ? styles.radioSelected : null,
                  ]}
                  onPress={() => setFieldValue("maritalStatus", status)}
                >
                  <Text>{status}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {values.maritalStatus !== "UnMarried" && (
              <>
                <Text style={styles.label}>Have Children:</Text>
                <View style={styles.radioContainer}>
                  {["Yes", "No"].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.radioButton,
                        values.haveChildren === option ? styles.radioSelected : null,
                      ]}
                      onPress={() => setFieldValue("haveChildren", option)}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <Text style={styles.label}>Living Together:</Text>
                <View style={styles.radioContainer}>
                  {["Yes", "No"].map((option) => (
                    <TouchableOpacity
                      key={option}
                      style={[
                        styles.radioButton,
                        values.livingTogether === option ? styles.radioSelected : null,
                      ]}
                      onPress={() => setFieldValue("livingTogether", option)}
                    >
                      <Text>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            <Text style={styles.label}>Sevvai Dosham:</Text>
            <View style={styles.radioContainer}>
              {["Yes", "No", "Not Known"].map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.radioButton,
                    values.sevvaiDosham === option ? styles.radioSelected : null,
                  ]}
                  onPress={() => setFieldValue("sevvaiDosham", option)}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Gothram:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your gothram"
              onChangeText={handleChange("gothram")}
              onBlur={handleBlur("gothram")}
              value={values.gothram}
            />

            <Text style={styles.label}>Raasi & Natchatram:</Text>
            <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setRaasiModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedRaasi ? selectedRaasi : "Select Raasi & Natchatram"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={raasiModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setRaasiModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={raasiOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedRaasi, setRaasiModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedRaasi === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setRaasiModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


            <Text style={styles.label}>Laknam:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your laknam"
              onChangeText={handleChange("laknam")}
              onBlur={handleBlur("laknam")}
              value={values.laknam}
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
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'white' },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5, height: 45 },
  radioContainer: { flexDirection: "row", marginBottom: 10, gap: 10, flexWrap: 'wrap' },
  radioButton: { padding: 10, borderWidth: 1, borderRadius: 5, marginRight: 10 },
  radioSelected: { backgroundColor: "#00ffff" },
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
