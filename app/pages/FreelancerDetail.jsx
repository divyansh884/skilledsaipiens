import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const FreelancerDetail = ({ route }) => {
  const { freelancer } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Freelancer Info */}
      <View style={styles.header}>
        <Image source={freelancer.image} style={styles.profileImage} />
        <Text style={styles.name}>{freelancer.name}</Text>
        <Text style={styles.services}>{freelancer.services}</Text>
        <Text style={styles.price}>Price: {freelancer.price}</Text>
        <Text style={styles.rating}>⭐ {freelancer.rating}</Text>
      </View>

      {/* Projects Section (Static) */}
      <View style={styles.projectsContainer}>
        <Text style={styles.projectsTitle}>Projects</Text>
        {freelancer.projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  services: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: "#FFD700",
    marginBottom: 10,
  },
  projectsContainer: {
    padding: 20,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  projectsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  projectCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default FreelancerDetail;
