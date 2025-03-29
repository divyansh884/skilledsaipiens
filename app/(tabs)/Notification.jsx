import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const notifications = [
  { id: "1", message: "Your job post has been approved!", time: "2h ago", icon: "check-circle" },
  { id: "2", message: "A freelancer has applied to your project.", time: "5h ago", icon: "account-tie" },
  { id: "3", message: "Your subscription is about to expire.", time: "1d ago", icon: "alert-circle" },
  { id: "4", message: "You received a new message from John Doe.", time: "2d ago", icon: "message-text" },
  { id: "5", message: "New freelancer recommendations are available.", time: "3d ago", icon: "account-multiple" },
];

const NotificationItem = ({ item }) => (
  <View style={styles.notificationCard}>
    <Icon name={item.icon} size={28} color="#FFD700" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🔔 Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={NotificationItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
});

export default Notifications;
