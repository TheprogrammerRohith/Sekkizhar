import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {  
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ userId: "", password: ""});

  const validateForm = () => {
    let valid = true;
    let newErrors = { userId: "", password: "", confirmPassword: "" };

    if (userId.length==0) {
      newErrors.userId = "enter userId";
      valid = false;
    }

    if (password.length==0) {
      newErrors.password = "enter password";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
      //if (validateForm()) {
        Alert.alert("Login Successful", "", [
          { text: "OK", onPress: () => navigation.navigate("Home") },
        ]);
      //}
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back, Login</Text>
        
        <TextInput
          placeholder='Enter username'
          value={userId}
          onChangeText={setUserId}
          style={styles.input}
          placeholderTextColor='#888'
        />
        {errors.userId ? <Text style={styles.error}>{errors.userId}</Text> : null}

        <TextInput
          placeholder='Enter password'
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          placeholderTextColor='#888'
        />
        {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
          
        <Text style={styles.label}>Forget Password ?</Text>

        <Text style={styles.label2}>New User ?</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BasicInfo")}>
          <Text style={styles.buttonText}>Create new Profile</Text>
        </TouchableOpacity>

      </View>      
    </SafeAreaView>
  );
}

// Sample styles (Modify as needed)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' },
  formContainer: { width: '80%' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label:{marginTop:10,marginBottom:10,fontSize:16,textAlign:'right'},
  label2:{marginTop:10,marginBottom:10,fontSize:16,textAlign:'left'},
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, width: '100%', borderRadius: 5 },
  button: { backgroundColor: 'orange', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;