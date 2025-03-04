import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalSelector from "react-native-modal-selector";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-date-picker";
import Ionicons from "react-native-vector-icons/Ionicons";

const BasicInfo = ({navigation,initialValues,isEditMode = false}) => {

  const validationSchema = Yup.object().shape({
    profileCreatedBy: Yup.string().required("field is required"),
    caste: Yup.string().required("caste is required"),
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("DOB is required"),
    time :Yup.string().required("Time is required"),
    place: Yup.string().required("place is required"),
    height: Yup.string().required("Height is required"),
    bodyType: Yup.string().required("Body Type is required"),
    complexion: Yup.string().required("Complexion is required"),
    physicalStatus: Yup.string().required("Physical Status is required"),
    die: Yup.string().required("Diet is required"),
    bloodGroup: Yup.string().required("Blood Group is required") 
  });

  const genderOptions = [
    { id: "male", label: "Male", value: "Male" },
    { id: "female", label: "Female", value: "Female" }
  ];

  const bodyOptions =[
    {id:"slim",label:"Slim",value:"Slim"},
    {id:"average",label:"Average",value:"Average"},
    {id:"heavy",label:"Heavy",value:"Heavy"}
  ];

  const complexionOptions=[
    {id:"fair",label:"Fair",value:"Fair"},
    {id:"wheatish",label:"Wheatish",value:"Wheatish"},
    {id:"wheatish brown",label:"Wheatish brown",value:"Wheatish Brown"},
    {id:"dark",label:"Dark",value:"Dark"}
  ];

  const physicalStatusOptions=[
    {id:"normal",label:"Normal",value:"Normal"},
    {id:"physically challenged",label:"Physically Challenged",value:"Physically Challenged"}
  ];

  const dietOptions=[
    {id:"vegetarian",label:"Vegetarian",value:"Vegetarian"},
    {id:"non vegetarian",label:"Non-Vegetarian",value:"Non-Vegetarian"}
  ];

  const heightOptions=[];
  for (let feet = 4; feet <= 6; feet++) {
    for (let inches = 0; inches < 12; inches++) {
      heightOptions.push(`${feet}'${inches}"`);
    }
  }
  const casteOptions = [
    "Agamudaiya Mudaliar",
    "Arcot Mudaliar",
    "Adhi Saiva Vellala",
    "Saiva Pillai",
    "Saiva Mudaliar",
    "Senkunda Mudaliar",
    "Thondamandalam Mudaliar",
    "Thuluva Vellala Mudaliar",
    "Others"
  ]; 
  const profileOptions =[
    "Self","Father","Mother","Brother","Sister","Friend"
  ];
 const bloodOptions= [
    "O Positive" ,
     "A Positive" ,
     "B Positive" ,
     "AB Positive" ,
     "A1B Positive" ,
     "A2B Positive" ,
     "A1 Positive" ,
     "A2 Positive" ,
     "O Negative" ,
     "A Negative" ,
     "B Negative" ,
     "AB Negative" ,
     "A1B Negative" ,
     "A2B Negative" ,
     "A1 Negative",
    "A2 Negative" 
  ]

  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState();
  const [casteModalVisible, setCasteModalVisible] = useState(false);
  const [selectedCaste, setSelectedCaste] = useState();
  const [heightModalVisible, setHeightModalVisible] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState();
  const [bloodModalVisible, setBloodModalVisible] = useState(false);
  const [selectedBlood, setSelectedBlood] = useState();


  const toggleSelection = (item,setSelectedItem,setItemModalVisible) => {
    setSelectedItem(item); // Set selected caste
    setItemModalVisible(false); // Close modal after selection
  };

  const [dobOpen, setDobOpen] = useState(false);
  const [dobChoosed, setDobChoosed] = useState(false);

  const defaultValues = {
    profileCreatedBy: "",
    caste: "",
    name: "",
    gender: "",
    dob: new Date(),
    time: "",
    place: "",
    height: "",
    bodyType: "",
    complexion: "",
    physicalStatus: "",
    diet: "",
    bloodGroup: "",
  };

  return (
    <Formik
    initialValues={initialValues || defaultValues}
      //validationSchema={validationSchema}
      onSubmit={(values) => {
        if (isEditMode) {
      handleEdit(values); // Call edit function
    } else {
      navigation.navigate("Education"); // Navigate to the next step in registration
    }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScrollView>
          <View style={styles.container}>

            {!isEditMode ? <Text style={styles.heading}>Basic Information</Text> : <></>}
            <Text style={styles.label}>Profile Created by:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setProfileModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedProfile ? selectedProfile : "Select Profile Created by"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={profileModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={profileOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedProfile, setProfileModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedProfile === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setProfileModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
              {touched.profileCreatedBy && errors.profileCreatedBy && (
                <Text style={styles.error}>{errors.profileCreatedBy}</Text>
              )}

    <Text style={styles.label}>Caste:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setCasteModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedCaste ? selectedCaste : "Select Caste"}
        </Text> 
      </TouchableOpacity>

      {/* Caste Modal */}
      <Modal
        visible={casteModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCasteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={casteOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedCaste, setCasteModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedCaste === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCasteModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
              {touched.profileCreatedBy && errors.profileCreatedBy && (
                <Text style={styles.error}>{errors.caste}</Text>
              )}

            <Text style={styles.label}>Varan Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Varan Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
              
              <Text style={styles.label}>Gender:</Text>
              <View style={styles.radioContainer}>
                {genderOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.radioButton,
                      values.gender === option.value ? styles.radioSelected : null,
                    ]}
                    onPress={() => setFieldValue("gender", option.value)}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

                <Text style={styles.label}>Date of Birth:</Text>

                <Button title="Select Date of Birth" onPress={() => setDobOpen(true)} />

                <Text style={styles.dateText}>
                  {dobChoosed ? values.dob.toLocaleDateString("en-GB") : ""}
                </Text>

                <DatePicker
                  modal
                  open={dobOpen}
                  date={values.dob || new Date()}
                  mode="date"
                  onConfirm={(date) => {
                    setDobOpen(false);
                    setDobChoosed(true);
                    setFieldValue("dob", date);
                  }}
                  onCancel={() => setDobOpen(false)}
                />

              <Text style={styles.label}>Time:</Text>
              <TextInput
                style={styles.input}
                placeholder="Time"
                onChangeText={handleChange("time")}
                onBlur={handleBlur("time")}
                value={values.time}
              />
              {touched.time && errors.time && <Text style={styles.error}>{errors.time}</Text>}
            
              <Text style={styles.label}>Place:</Text>
              <TextInput
                style={styles.input}
                placeholder="place"
                onChangeText={handleChange("place")}
                onBlur={handleBlur("place")}
                value={values.name}
              />
              {touched.place && errors.place && <Text style={styles.error}>{errors.place}</Text>}

              <Text style={styles.label}>Height:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setHeightModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedHeight ? selectedHeight : "Select Height"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={heightModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setHeightModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={heightOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedHeight, setHeightModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedHeight === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setHeightModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
                  
              {touched.height && errors.height && <Text style={styles.error}>{errors.height}</Text>}

              <Text style={styles.label}>Body Type:</Text>
              <View style={styles.radioContainer}>
                {bodyOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.radioButton,
                      values.bodyType === option.value ? styles.radioSelected : null,
                    ]}
                    onPress={() => setFieldValue("bodyType", option.value)}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.bodyType && errors.bodyType && <Text style={styles.error}>{errors.bodyType}</Text>}

              <Text style={styles.label}>Complexion:</Text>
              <View style={styles.radioContainer}>
                {complexionOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.radioButton,
                      values.complexion === option.value ? styles.radioSelected : null,
                    ]}
                    onPress={() => setFieldValue("complexion", option.value)}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.complexion && errors.complexion && <Text style={styles.error}>{errors.complexion}</Text>}

              <Text style={styles.label}>Physical Status:</Text>
              <View style={styles.radioContainer}>
                {physicalStatusOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.radioButton,
                      values.physicalStatus === option.value ? styles.radioSelected : null,
                    ]}
                    onPress={() => setFieldValue("physicalStatus", option.value)}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.physicalStatus && errors.physicalStatus && <Text style={styles.error}>{errors.physicalStatus}</Text>}

              <Text style={styles.label}>Diet:</Text>
              <View style={styles.radioContainer}>
                {dietOptions.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    style={[
                      styles.radioButton,
                      values.diet === option.value ? styles.radioSelected : null,
                    ]}
                    onPress={() => setFieldValue("diet", option.value)}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {touched.diet && errors.diet && <Text style={styles.error}>{errors.diet}</Text>}

              <Text style={styles.label}>Blood Type:</Text>
              <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setBloodModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedBlood ? selectedBlood : "Select Blood Type"}
        </Text> 
      </TouchableOpacity>

      <Modal
        visible={bloodModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setBloodModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={bloodOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedBlood, setBloodModalVisible)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedBlood === item ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setBloodModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
              {touched.bloodGroup && errors.bloodGroup && (
                <Text style={styles.error}>{errors.bloodGroup}</Text>
              )}

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
  container: { padding: 20 ,backgroundColor:'white'},
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  heading: {fontSize: 20, fontWeight: "bold", marginBottom: 10,textAlign:'center'},
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5, 
    height: 45 
  },
  error: { color: "red", marginBottom: 10 },
  radioContainer: { flexDirection: "row", marginBottom: 10,flexWrap:'wrap',gap:10 },
  radioButton: { padding: 10, borderWidth: 1, borderRadius: 5, marginRight: 10 },
  radioSelected: { backgroundColor: "#00ffff" },

  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 10, 
  },
  dateText: { 
    fontSize: 16, 
    color: "#333", 
    marginVertical: 10, 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 5, 
    textAlign: "center" 
  },
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


export default BasicInfo;
