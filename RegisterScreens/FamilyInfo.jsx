import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Formik } from "formik";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function FamilyInfo({ navigation,initialValues,isEditMode = false }) {

  const defaultValues= {
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    brothers: "",
    sisters: ""
  }

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values) => {
        if (isEditMode) {
          handleEdit(values); // Call edit function
        } else {
          navigation.navigate("Contact"); // Navigate to the next step in registration
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView style={{backgroundColor:'white'}}>
          <View style={styles.container}>
            {!isEditMode ? <Text style={styles.heading}>Family Info</Text> : <></>}

            <Text style={styles.label}>Father's Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your father's name"
              onChangeText={handleChange("fatherName")}
              onBlur={handleBlur("fatherName")}
              value={values.fatherName}
            />

            <Text style={styles.label}>Father's Occupation:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter father's occupation"
              onChangeText={handleChange("fatherOccupation")}
              onBlur={handleBlur("fatherOccupation")}
              value={values.fatherOccupation}
            />

            <Text style={styles.label}>Mother's Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mother's name"
              onChangeText={handleChange("motherName")}
              onBlur={handleBlur("motherName")}
              value={values.motherName}
            />

            <Text style={styles.label}>Mother's Occupation:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter mother's occupation"
              onChangeText={handleChange("motherOccupation")}
              onBlur={handleBlur("motherOccupation")}
              value={values.motherOccupation}
            />

            <Text style={styles.label}>Number of Brothers:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number of brothers"
              keyboardType='numeric'
              onChangeText={handleChange("brothers")}
              onBlur={handleBlur("brothers")}
              value={values.brothers}
            />

            <Text style={styles.label}>Number of Sisters:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter number of sisters"
              keyboardType='numeric'
              onChangeText={handleChange("sisters")}
              onBlur={handleBlur("sisters")}
              value={values.sisters}
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
    container: { padding: 20, backgroundColor: 'white'},
    input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5, height: 45 },
    heading: { fontSize: 20, fontWeight: "bold", marginBottom: 5, textAlign: 'center' },
    label: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
    button: { backgroundColor: 'orange', padding: 10, borderRadius: 5, alignItems: 'center' },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
  });
