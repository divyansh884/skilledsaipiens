import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("User logged out") },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      {/* Profile */}
      <TouchableOpacity style={styles.option} >
        <Icon name="user" size={24} color="#FFD700" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>

      {/* Notifications Toggle */}
      <View style={styles.option}>
        <Icon name="bell" size={24} color="#FFD700" />
        <Text style={styles.optionText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.option}>
        <Icon name="moon-o" size={24} color="#FFD700" />
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Privacy Policy */}
      <TouchableOpacity style={styles.option} >
        <Icon name="lock" size={24} color="#FFD700" />
        <Text style={styles.optionText}>Privacy Policy</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={[styles.option, styles.logout]} onPress={handleLogout}>
        <Icon name="sign-out" size={24} color="red" />
        <Text style={[styles.optionText, { color: "red" }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 18,
    marginLeft: 15,
    flex: 1,
  },
  logout: {
    marginTop: 30,
  },
});
