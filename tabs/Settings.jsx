import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch, Linking, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    Alert.alert("Successfully Signed Out", "", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EditProfile')}>
        <Icon name="account-edit" size={24} color="#333" />
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Bookmarks')}>
        <Icon name="bookmark" size={24} color="#333" />
        <Text style={styles.optionText}>Bookmarks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Interests')}>
        <Icon name="heart" size={24} color="#333" />
        <Text style={styles.optionText}>Interests Received</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Payment')}>
        <Icon name="credit-card" size={24} color="#333" />
        <Text style={styles.optionText}>Payment Subscription</Text>
      </TouchableOpacity>

      

      {/* Contact Us Section */}
      <View style={styles.contactContainer}>
        <Text style={styles.contactHeader}>Contact Us</Text>
        <Text style={styles.contactText}>sekkizhar.com</Text>
        <Text style={styles.contactText}>
          No:10 (Old No:87) Gangathareeswarar Koil 2nd St, Purasawalkam, Chennai.
        </Text>
        <Text style={styles.contactText}>Pincode - 600 084</Text>

        <TouchableOpacity onPress={() => Linking.openURL("tel:+919025947763")}>
          <Text style={styles.contactText}>📞 +91-90259 47763</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("tel:+919444274370")}>
          <Text style={styles.contactText}>📞 +91-94442 74370</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Icon name="logout" size={24} color="#D32F2F" />
        <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "left",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 20,
    color: "#333",
    flex: 1,
    marginLeft: 10,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  logoutText: {
    color: "#D32F2F",
  },
  logout: {
    marginTop: 30,
  },
  contactContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contactText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});
