import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const More = ({ navigation }) => {
  const options = [
    { id: "1", title: "About Us", icon: "info-circle", screen: "AboutUs" },
    { id: "2", title: "Contact Us", icon: "phone", screen: "ContactUs" },
    { id: "3", title: "FAQs", icon: "question-circle", screen: "FAQs" },
    { id: "4", title: "Terms & Conditions", icon: "file-text", screen: "Terms" },
    { id: "5", title: "Privacy Policy", icon: "shield", screen: "Privacy" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>More</Text>
      {options.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.option}
        >
          <Icon name={item.icon} size={24} color="#FFD700" style={styles.icon} />
          <Text style={styles.optionText}>{item.title}</Text>
          <Icon name="chevron-right" size={20} color="#888" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
  },
});

export default More;
