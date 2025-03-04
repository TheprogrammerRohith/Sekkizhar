import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "react-native-image-picker";
import { Platform, PermissionsAndroid } from "react-native";

export default function Contact({ navigation,initialValues,isEditMode = false }) {
  //const [photo, setPhoto] = useState<string | null>(null);

  const defaultValues={
    mobileNumber: "",
    alternateMobile: "",
    contactPerson: "",
    relationship: "",
    contactAddress: "",
    residenceAddress: "",
    partnerExpectations: "",
    relation1: { name: "", city: "", contact: "" },
    relation2: { name: "", city: "", contact: "" },
  }

  const validationSchema =Yup.object().shape({
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Required"),
    contactPerson: Yup.string().required("Required"),
    relationship: Yup.string().required("Required"),
    contactAddress: Yup.string().required("Required"),
    residenceAddress: Yup.string().required("Required")
  })
  const pickImage = () => {
    // ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
    //   if (response.assets && response.assets.length > 0) {
    //     setPhoto(response.assets[0].uri || null);
    //   }
    // });
  };
  
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      //validationSchema={validationSchema}
      onSubmit={(values) => {
        if (isEditMode) {
          handleEdit(values); // Call edit function
        } else {
          navigation.navigate("Registration"); // Navigate to the next step in registration
        }
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScrollView>
            <View style={styles.container}>
          {/* Mobile Number */}
          {!isEditMode ? <Text style={styles.heading}>Contact Info</Text> : <></>}
          <Text style={styles.label}>Mobile Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="+91"
            onChangeText={handleChange("mobileNumber")}
            value={values.mobileNumber}
          />
          {touched.mobileNumber && errors.mobileNumber && <Text style={styles.error}>{errors.mobileNumber}</Text>}

          {/* Alternate Mobile Number */}
          <Text style={styles.label}>Alternate Mobile Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="+91"
            onChangeText={handleChange("alternateMobile")}
            value={values.alternateMobile}
          />

          {/* Contact Person Name */}
          <Text style={styles.label}>Name of Contact Person:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("contactPerson")} value={values.contactPerson} />
          {touched.contactPerson && errors.contactPerson && <Text style={styles.error}>{errors.contactPerson}</Text>}

          {/* Relationship */}
          <Text style={styles.label}>Relationship:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("relationship")} value={values.relationship} />
          {touched.relationship && errors.relationship && <Text style={styles.error}>{errors.relationship}</Text>}

          {/* Contact Address */}
          <Text style={styles.label}>Contact Address & Email:</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            multiline
            onChangeText={handleChange("contactAddress")}
            value={values.contactAddress}
          />
          {touched.contactAddress && errors.contactAddress && <Text style={styles.error}>{errors.contactAddress}</Text>}

          {/* Residence Address */}
          <Text style={styles.label}>Residence Address:</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            multiline
            onChangeText={handleChange("residenceAddress")}
            value={values.residenceAddress}
          />
          {touched.residenceAddress && errors.residenceAddress && <Text style={styles.error}>{errors.residenceAddress}</Text>}

          {/* Partner Expectations */}
          <Text style={styles.label}>Partner Expectations (Max 500 words):</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            multiline
            maxLength={500}
            onChangeText={handleChange("partnerExpectations")}
            value={values.partnerExpectations}
          />

          {/* Close Relation 1 */}
          <Text style={styles.label}>Close Relation 1 - Name:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("relation1.name")} value={values.relation1.name} />
          <Text style={styles.label}>City:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("relation1.city")} value={values.relation1.city} />
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={handleChange("relation1.contact")}
            value={values.relation1.contact}
          />

          {/* Close Relation 2 */}
          <Text style={styles.label}>Close Relation 2 - Name:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("relation2.name")} value={values.relation2.name} />
          <Text style={styles.label}>City:</Text>
          <TextInput style={styles.input} onChangeText={handleChange("relation2.city")} value={values.relation2.city} />
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={handleChange("relation2.contact")}
            value={values.relation2.contact}
          />

          {/* Upload Photo */}
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadText}>Upload Photo</Text>
          </TouchableOpacity>
          {/* {photo && <Image source={{ uri: photo }} style={styles.image} />} */}
          
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
  container: { padding: 20,backgroundColor:'white' },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5, 
    height: 45 
  },
  image: { width: 100, height: 100, marginTop: 10 },
  uploadButton: {
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  uploadText: {
    color: "#000",
    fontSize: 16,
  },
  multiline: { height: 80 },
  error: { color: "red", marginBottom: 10 },
  heading: {fontSize: 20, fontWeight: "bold", marginBottom: 5,textAlign:'center'},
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
})

