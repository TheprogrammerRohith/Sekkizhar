import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Search = () => {
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [selectedNative, setSelectedNative] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState([]);
  const [selectedPhysicalStatus, setSelectedPhysicalStatus] = useState("");
  const [selectedCaste, setSelectedCaste] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [locationModalVisible, setLocationModalVisible] = useState(false);
  const [casteModalVisible, setCasteModalVisible] = useState(false);
  const [educationModalVisible, setEducationModalVisible] = useState(false);
  const [nativeModalVisible, setNativeModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]); 
  const [showResults, setShowResults] = useState(false);

  const sampleData = [
    {
      id: "1",
      photo: "https://via.placeholder.com/100",
      userId: "USR001",
      name: "Ravi Kumar",
      age: "28",
      height: "5'8\"",
      caste: "Saiva Pillai",
      location: "Chennai",
      education: "Engineering",
      occupation: "Software Engineer",
    },
    {
      id: "2",
      photo: "https://via.placeholder.com/100",
      userId: "USR002",
      name: "Priya Sharma",
      age: "26",
      height: "5'4\"",
      caste: "Senkunda Mudaliar",
      location: "Coimbatore",
      education: "Medicine",
      occupation: "Doctor",
    },
  ];
  
  const educationOptions = ["Any","Engineering", "Medicine", "Computer Science", "Arts/Other Science","Commerce","Law","Diploma"];
  const casteOptions = [
    "Any",
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
  const locationOptions = ["Any","India", "Other Country - Permanent Resident", "Other Country - Temporary Resident"];
  const nativeOptions = [
    "Any",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karaikal",
    "Karur",
    "krishnagiri",
    "Madurai",
    "Mahe",
    "Nagapattinam",
    "Nammakkal",
    "Nilgiris",
    "Perambalur",
    "Pondicherry",
    "Pudukkotai",
    "Ramanathapuram",
    "Salem",
    "Sivagangai",
    "Thanjavur",
    "Theni",
    "Thoothukkudi",
    "Tiruchirappali",
    "Thirnelveli",
    "Thiruvallur",
    "Thiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Villupuram",
    "Virudhunagar",
    "Yanem"
  ];
  const maritalStatusOptions = ["Any", "Unmarried", "Divorced", "Widowed", "Separated", "Annulled"];
  const physicalStatusOptions = ["Doesn't Matter", "Normal", "Physically Challenged"];

  const toggleSelection = (option, setSelected, selected) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSearch = () => {
    // Simulate fetching data based on filters
    setSearchResults(sampleData);
    setShowResults(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{flex:1,flexDirection:'row'}}>
        <Image source={{ uri: item.photo }} style={styles.profileImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.userName}>{item.name}, {item.age}</Text>
          <Text>User ID: {item.userId}</Text>
          <Text>Height: {item.height}</Text>
          <Text>Caste: {item.caste}</Text>
          <Text>Location: {item.location}</Text>
          <Text>Education: {item.education}</Text>
          <Text>Occupation: {item.occupation}</Text>
        </View>
      </View>      
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Send Interest</Text>
              <Icon name="heart" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecondary}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Add to Bookmarks</Text>
              <Icon name="bookmark" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
    </View>
  );

  return (

    <ScrollView>
    <View style={styles.container}>

      {showResults ? (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text style={styles.header}>Search Results</Text>
          {searchResults.length > 0 ? (
            <View>
              {sampleData.map((item) => (
                <View key={item.id}>{renderItem({ item })}</View> // Add key prop
              ))}

            </View>
          ) : (
            <Text style={styles.noResults}>No matches found</Text>
          )}
          <TouchableOpacity style={styles.searchButton} onPress={() => setShowResults(false)}>
            <Text style={styles.searchText}>Modify Search</Text>
          </TouchableOpacity>
      </View>
      ) : (
      <>
      <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',marginBottom:10}}>Find Your Match</Text>
      {/* Gender Selection */}
      <View style={styles.radioGroup}>
        <Text style={styles.label}>Looking for:</Text>
        <View style={{flexDirection:'row',gap:10}}>
        {['Male', 'Female'].map((gender) => (
          <TouchableOpacity key={gender} style={styles.radioButton} onPress={() => setSelectedGender(gender)}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
              <Ionicons name={selectedGender === gender ? "radio-button-on" : "radio-button-off"} size={24} color="black" />
              <Text style={styles.optionText}>{gender}</Text>  {/* Ensure text is inside <Text> */}
            </View>
          </TouchableOpacity>
        ))}

        </View>
      </View>

      {/* Marital Status Selection */}
      <Text style={styles.label}>Marital Status:</Text>
      <View style={styles.checkboxGroup}>
        {maritalStatusOptions.map((status) => (
          <TouchableOpacity key={status} style={styles.checkboxRow} onPress={() => toggleSelection(status, setSelectedMaritalStatus, selectedMaritalStatus)}>
            <Ionicons
              name={selectedMaritalStatus.includes(status) ? "checkbox" : "square-outline"}
              size={24}
              color="black"
            />
            <Text style={styles.optionText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Physical Status Selection */}
      <View style={styles.radioGroup}>
        <Text style={styles.label}>Physical Status:</Text>
        {physicalStatusOptions.map((status) => (
          <TouchableOpacity key={status} style={styles.radioButton} onPress={() => setSelectedPhysicalStatus(status)}>
            <Ionicons
              name={selectedPhysicalStatus === status ? "radio-button-on" : "radio-button-off"}
              size={24}
              color="black"
            />
            <Text style={styles.optionText}>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Caste:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setCasteModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedCaste.length > 0 ? selectedCaste.join(", ") : "Select Caste"}
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
                  onPress={() => toggleSelection(item, setSelectedCaste, selectedCaste)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Ionicons name={selectedCaste.includes(item) ? "checkbox" : "square-outline"} size={24} color="black" />
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

      <Text style={styles.label}>Native:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setNativeModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedNative.length > 0 ? selectedNative.join(", ") : "Select Native"}
        </Text>
      </TouchableOpacity>

      {/* Native Modal */}
      <Modal
        visible={nativeModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setNativeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={nativeOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedNative, selectedNative)}
                >
                  <Ionicons
                    name={selectedNative.includes(item) ? "checkbox" : "square-outline"}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setNativeModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Education Selection */}
      <Text style={styles.label}>Education:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setEducationModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedEducation.length > 0 ? selectedEducation.join(", ") : "Select Education"}
        </Text>
      </TouchableOpacity>

      {/* Education Modal */}
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
                  onPress={() => toggleSelection(item, setSelectedEducation, selectedEducation)}
                >
                  <Ionicons
                    name={selectedEducation.includes(item) ? "checkbox" : "square-outline"}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.optionText}>{item}</Text>
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

      {/* location Selection */}
      <Text style={styles.label}>Location:</Text>
      <TouchableOpacity
        style={styles.selectionBox}
        onPress={() => setLocationModalVisible(true)}
      >
        <Text style={styles.selectionText}>
          {selectedLocation.length > 0 ? selectedLocation.join(", ") : "Select Location"}
        </Text>
      </TouchableOpacity>

      {/* Location Modal */}
      <Modal
        visible={locationModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setLocationModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={locationOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.checkboxRow}
                  onPress={() => toggleSelection(item, setSelectedLocation, selectedLocation)}
                >
                  <Ionicons
                    name={selectedLocation.includes(item) ? "checkbox" : "square-outline"}
                    size={24}
                    color="black"
                  />
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setLocationModalVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>

      </>
      )};
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "white" },

  // Headers & Text
  header: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  label: { fontSize: 18, fontWeight: "bol d", marginBottom: 10 },
  selectionText: { fontSize: 16, color: "black" },
  optionText: { fontSize: 16, marginLeft: 5 },
  searchText: { color: "white", fontSize: 16, fontWeight: "bold" },
  closeText: { fontSize: 16, color: "blue" },
  noResults: { fontSize: 18, textAlign: "center", marginVertical: 20, color: "gray" },
  userName: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },

  // Selection Boxes
  selectionBox: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
    borderRadius: 5,
  },

  // Radio & Checkbox Groups
  radioGroup: { marginBottom: 15 },
  radioButton: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  checkboxGroup: { marginBottom: 15, flexDirection: "row", flexWrap: "wrap", gap: 10 },
  checkboxRow: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },

  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: "80%" },

  // Buttons
  searchButton: { marginTop: 20, backgroundColor: "#63C5DA", padding: 15, borderRadius: 5, alignItems: "center" },
  closeButton: { marginTop: 5, alignItems: "center" },
  buttonContainer: { flexDirection: "row", marginTop: 10, gap: 10 },
  button: { backgroundColor: "#ff6b6b", padding: 10, borderRadius: 5, flex: 1, alignItems: "center",flexDirection:'row'},
  buttonSecondary: { backgroundColor: "#ffa502", padding: 10, borderRadius: 5, flex: 1, alignItems: "center" },
  buttonText: { color: "white", fontSize: 14, fontWeight: "bold" },
  buttonContent :{flex:1,flexDirection:'column',gap:5},

  // Card Styles
  card: {
    flexDirection: "coulmn",
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  profileImage: { width: 100, height: 120,marginTop:30,borderRadius: 10,marginRight: 15,backgroundColor:"#ccc"},
  cardInfo: { flex: 1, justifyContent: "center" },
});


export default Search;
