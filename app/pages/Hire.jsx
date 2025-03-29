import React from "react";
import { View, Text, Image, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from '@react-navigation/stack';
import FreelancerDetail from "./FreelancerDetail"
const Stack = createStackNavigator();
import { useNavigation } from "@react-navigation/native";
const freelancers = [
    {
      id: "1",
      name: "Sanskar Patel",
      services: "UI Design, Web Dev, Wireframes",
      price: "US$ 199",
      rating: 4.8,
      image: require("../../assets/freelancer1.png"),
      projects: [
        { title: "E-commerce Website", description: "Built an online store with React & Firebase." },
        { title: "Portfolio Website", description: "Designed a personal portfolio using TailwindCSS." },
      ],
    },
    {
      id: "2",
      name: "Rashi Ahuja",
      services: "Landing Page, Ecommerce UI",
      price: "US$ 149",
      rating: 4.7,
      image: require("../../assets/freelancer2.jpeg"),
      projects: [
        { title: "Travel Booking UI", description: "Created UI for a travel booking website." },
        { title: "Food Delivery App", description: "Developed UX for a food delivery platform." },
      ],
    },
    {
      id: "3",
      name: "Rohan Jain",
      services: "Dashboard UI, UX Consultation",
      price: "US$ 179",
      rating: 4.6,
      image: require("../../assets/freelancer3.jpeg"),
      projects: [
        { title: "Admin Dashboard", description: "Designed a responsive admin dashboard." },
        { title: "AI Chatbot UI", description: "Created UI for an AI-based chatbot." },
      ],
    },
  ];
  

const HireScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <TextInput placeholder="Search our freelancers" style={styles.searchBar} />
        <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>

      {/* Freelancer List */}
      <FlatList
        data={freelancers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('FreelancerDetail', { freelancer: item })}
          >
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>NAME</Text>
              <Text style={styles.info}>{item.name}</Text>
              <Text style={styles.name}>SERVICES</Text>
              <Text style={styles.info}>{item.services}</Text>
              <Text style={styles.name}>PRICE</Text>
              <Text style={styles.info}>{item.price}</Text>
              <Text style={styles.name}>RATING</Text>
              <Text style={styles.info}>{item.rating} ⭐</Text>
            </View>
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Hire = () => {
    return (
        <Stack.Navigator initialRouteName="Hire" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Hire" component={HireScreen} options={{ headerShown: false }} />
          <Stack.Screen name="FreelancerDetail" component={FreelancerDetail} />
        </Stack.Navigator>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F8F8F8",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchIcon: {
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#999",
  },
  info: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#000",
  },
});

export default Hire;
