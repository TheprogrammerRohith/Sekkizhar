import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

const userData = {
  basicInfo: {
    age: 28,
    height: "5'8\"",
    bodyType: "Athletic",
    complexion: "Fair",
    physicalStatus: "Normal",
    diet: "Vegetarian",
    birthTime: "03:45 AM",
    birthPlace: "New York, USA",
  },
  education: {
    education: "B.Tech in Computer Science",
    occupation: "Software Engineer",
    monthlyIncome: "50000 Rupees",
  },
  location: {
    country: "India",
    state: "Telangana",
    city: "Hyderabad",
    district: "kanchipuram",
    Town: "Vandalur",
  },
  family: {
    father: { name: "John Doe", occupation: "Businessman" },
    mother: { name: "Jane Doe", occupation: "Teacher" },
    sisters: ["Emily Doe"],
    brothers: ["David Doe"],
  },
};

const renderRow = (label, value) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);



const Profile = () => {
  const [selectedOption, setSelectedOption] = useState("Basic Info");

  const radioOptions = [
    "Basic Info",
    "Education and Career",
    "Location and Nativity",
    "Family",
  ];

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        
        {/* Profile Section */}
        <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',marginBottom:10}}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Image
            
            style={styles.profileImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userID}>M250213901</Text>
            <Text style={styles.userDetails}>Varan name</Text>
            <Text style={styles.userDetails}>Male - unmarried</Text>
            <Text style={styles.userDetails}>Caste</Text>
            <Text style={styles.userDetails}>Profile create by</Text>
            <Text style={styles.userDetails}>Raasi & Natchatram</Text>
          </View>
        </View>

        {/* Radio Buttons */}
        <View style={styles.radioContainer}>
          {radioOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.radioButton,
                selectedOption === option && styles.selectedRadio,
              ]}
              onPress={() => setSelectedOption(option)}
            >
              <Text style={styles.radioText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.detailsContainer}>
      {selectedOption === "Basic Info" && (
        <>
          {renderRow("Age:", userData.basicInfo.age)}
          {renderRow("Height:", userData.basicInfo.height)}
          {renderRow("Body Type:", userData.basicInfo.bodyType)}
          {renderRow("Complexion:", userData.basicInfo.complexion)}
          {renderRow("Physical Status:", userData.basicInfo.physicalStatus)}
          {renderRow("Diet:", userData.basicInfo.diet)}
          {renderRow("Birth Time:", userData.basicInfo.birthTime)}
          {renderRow("Birth Place:", userData.basicInfo.birthPlace)}
        </>
      )}

      {selectedOption === "Education and Career" && (
        <>
          {renderRow("Education:", userData.education.education)}
          {renderRow("Occupation:", userData.education.occupation)}
          {renderRow("Monthly Income:", userData.education.monthlyIncome)}
        </>
      )}

      {selectedOption === "Location and Nativity" && (
        <>
          {renderRow("Country:", userData.location.country)}
          {renderRow("State:", userData.location.state)}
          {renderRow("City/Town/Village:", userData.location.city)}
          {renderRow("District:", userData.location.district)}
          {renderRow("Town:", userData.location.Town)}
        </>
      )}

      {selectedOption === "Family" && (
        <>
          {renderRow("Father:", `${userData.family.father.name} (${userData.family.father.occupation})`)}
          {renderRow("Mother:", `${userData.family.mother.name} (${userData.family.mother.occupation})`)}
          {renderRow("Sister(s):", userData.family.sisters.join(", "))}
          {renderRow("Brother(s):", userData.family.brothers.join(", "))}
        </>
      )}
    </View>
        
      </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor:'white'
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  userInfo: {
    marginLeft: 15,
  },
  userID: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom:5
  },
  userDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom:5
  },
  radioContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedRadio: {
    backgroundColor: "#63C5DA",
  },
  radioText: {
    fontSize: 16,
    color: "black",
  },
  selectedText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "tomato",
    textAlign: "center",
  },
  detailsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  label: {
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    flex: 1,
    textAlign: "right",
  },
});
