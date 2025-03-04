import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Payment({ navigation }) {
  const userId = "USR123"; // Example user ID (fetch from auth)
  const amount = 1200; // Membership fee

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="keyboard-backspace" size={32} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Subscription</Text>
      </View>

      {/* Membership Info */}
      <Text style={styles.infoText}>
        To view the Contact Details of others, please pay below fee.
      </Text>

      {/* Silver Membership */}
      <View style={styles.card}>
        <Text style={styles.membershipTitle}>Silver Membership</Text>
        <Text style={styles.description}>
          Rs 1200 for six months from the date of payment.
        </Text>
        <Text style={styles.benefit}>✅ View all profiles with contact details.</Text>
        <Text style={styles.renewalText}>For further RENEWAL: Rs 700/- for six months.</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>Pay by CCAvenue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.payButton, styles.paypalButton]}>
            <Text style={styles.payButtonText}>Pay by PayPal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", gap: 5, marginBottom: 20 },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  infoText: { fontSize: 18, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  card: { backgroundColor: "#f9f9f9", padding: 15, borderRadius: 10, marginBottom: 15, shadowOpacity: 0.1, elevation: 3 },
  membershipTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 5, color: "#333" },
  description: { fontSize: 16, marginBottom: 5, color: "#555" },
  benefit: { fontSize: 16, color: "green", marginBottom: 10 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  payButton: { backgroundColor: "orange", padding: 12, borderRadius: 5, alignItems: "center", flex: 1, marginHorizontal: 5 },
  paypalButton: { backgroundColor: "#0070ba" }, // PayPal Blue
  payButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold", textAlign: "center" },
  renewalText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
  },
});


