import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Registration = ({navigation}) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ userId: "", password: "", confirmPassword: "" });

  const validateForm = () => {
    let valid = true;
    let newErrors = { userId: "", password: "", confirmPassword: "" };

    if (userId.length < 4 || userId.length > 10) {
      newErrors.userId = "User ID must be between 4 and 10 characters.";
      valid = false;
    }

    if (password.length < 4 || password.length > 10) {
      newErrors.password = "Password must be between 4 and 10 characters.";
      valid = false;
    }


    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegister = () => {
    //if (validateForm()) {
      Alert.alert("Registration Successful", "Login with Your Credintials", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
    //}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User ID</Text>
      <TextInput
        style={styles.input}
        value={userId}
        onChangeText={setUserId}
        placeholder="Enter User ID"
        maxLength={10}
      />
      {errors.userId ? <Text style={styles.error}>{errors.userId}</Text> : null}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
        maxLength={10}
      />
      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
        maxLength={10}
      />
      {errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Registration;
