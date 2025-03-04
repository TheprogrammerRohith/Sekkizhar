import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BasicInfo from "../RegisterScreens/BasicInfo";
import Education from "../RegisterScreens/Education";
import Location from "../RegisterScreens/Location";
import FamilyInfo from "../RegisterScreens/FamilyInfo";
import Contact from "../RegisterScreens/Contact";
import OtherInfo from "../RegisterScreens/OtherInfo";

const sections = [
  "Basic Info",
  "Education",
  "Location",
  "Family",
  "Contact",
  "Other Info",
];

const userData = {
  // Basic Info
  profileCreatedBy: "Self",
  caste: "Saiva Pillai",
  name: "John Doe",
  gender: "Male",
  dob: new Date("1995-08-20"),
  time: "10:30 AM",
  place: "Chennai",
  height: "5'9\"",
  bodyType: "Slim",
  complexion: "Fair",
  physicalStatus: "Normal",
  diet: "Vegetarian",
  bloodGroup: "O Positive",

  // Contact Details
  mobileNumber: "",
  alternateMobile: "",
  contactPerson: "",
  relationship: "",
  contactAddress: "",
  residenceAddress: "",
  partnerExpectations: "",
  relation1: { name: "", city: "", contact: "" },
  relation2: { name: "", city: "", contact: "" },

  // Other Info
  maritalStatus: "",
  haveChildren: "",
  livingTogether: "",
  sevvaiDosham: "",
  gothram: "",
  raasi_natchatram: "",
  laknam: "",
  horoscopeMatch: "",

  // Family Details
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  brothers: "",
  sisters: "",

  // Location
  residence: "",
  state: "",
  city: "",
  district: "",
  town: "",
  village: "",

  // Education & Occupation
  education: "Law",
  inDetail: "",
  occupation: "lawyer",
};


// Section Component Mapping
const sectionComponents = {
  "Basic Info": BasicInfo,
  "Education": Education,
  "Location": Location,
  "Family": FamilyInfo,
  "Contact": Contact,
  "Other Info": OtherInfo,
};

export default function EditProfile({ navigation }) {
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const SelectedComponent = sectionComponents[selectedSection];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" size={32} color="#333" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Edit Profile</Text>
        </View>
      </View>

      {/* Horizontal Scroll Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tab, selectedSection === section && styles.selectedTab]}
            onPress={() => setSelectedSection(section)}
          >
            <Text style={[styles.tabText,selectedSection === section && styles.selectedTabText]}>{section}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Render Selected Section Component */}
      {SelectedComponent && (
        <SelectedComponent navigation={navigation} initialValues={userData} isEditMode={true} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
    minHeight:50,
    maxHeight:50
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",  
    justifyContent: "center",
  },
  
  selectedTab: {
    backgroundColor: "#007BFF",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  selectedTabText:{
    color:"#fff"
  }
});

