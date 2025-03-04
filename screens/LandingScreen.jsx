import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo with full width and 55% of screen height */}
      <Image source={require("../logo.png")} style={styles.logo} />

      {/* Rounded White Container */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Sekkizhar</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logo: {
    width: width, // Full screen width
    height: height * 0.55, // Reduced height for better spacing
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff", // Ensures visibility
    position: "absolute", // Overlaps the image
    top: height * 0.5, // Position just below the image
    width: "100%",
    height: height * 0.5, // Covers remaining screen
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // Adds shadow effect for Android
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LandingScreen;
