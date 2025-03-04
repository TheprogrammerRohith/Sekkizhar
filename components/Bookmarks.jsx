import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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


const renderItem = ({ item }) => (
  <View style={styles.card}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
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
      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.buttonText}>Remove from Bookmarks</Text>
      </TouchableOpacity>
    </View>
  </View>
);


export default function Bookmarks({navigation}) {
  return (
    <View style={{padding:20,flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection: "row",alignItems: "center",gap:5}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="keyboard-backspace" size={32} color="#333" />
            </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Bookmarks</Text>
        </View>
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white',marginTop:10, }}>
                <View>
                {sampleData.map((item) => (
                  <View key={item.id}>{renderItem({ item })}</View> // Add key prop
                ))}
                </View>
              </View>
        </ScrollView>            
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  userName: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  profileImage: { width: 100, height: 120, marginTop: 30, borderRadius: 10, marginRight: 15, backgroundColor: "#ccc" },
  cardInfo: { flex: 1, justifyContent: "center" },
  
  buttonContainer: { 
    alignItems:"flex-end", 
    marginTop: 10 
  },
  removeButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
