import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const projects = [
  {
    id: "1",
    name: "Home Security App",
    description: "A React Native app for monitoring home security footage.",
    technologies: ["React Native", "Firebase", "WebRTC"],
  },
  {
    id: "2",
    name: "Recipe Handler",
    description: "A website where users can add and edit recipes.",
    technologies: ["React", "Firebase"],
  },
  {
    id: "3",
    name: "Freelancer Provider App",
    description: "An app for hiring freelancers with a modern UI.",
    technologies: ["React Native", "Expo", "Redux"],
  },
];

const Projects = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
          >
            <Text style={styles.projectName}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.techStack}>Tech: {item.technologies.join(", ")}</Text>
          </TouchableOpacity>
        )}
      />
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
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#555",
  },
  techStack: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    color: "#777",
  },
});

export default Projects;
