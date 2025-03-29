import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator} from "@react-navigation/stack";
import Hire from "../pages/Hire";
import Settings from "../pages/Settings"
import Projects from "../pages/Projects"
import Packages from "../pages/Packages"
const Stack = createStackNavigator();
const HomeScreen = ({ navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Tagline */}
      <Text style={styles.heading}>Need help in UI/UX?</Text>

      {/* CTA Button */}
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Hire')} >
        <Text style={styles.buttonText}>Explore our Services!</Text>
      </TouchableOpacity>

      {/* Service Options */}
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Hire')}>
          <Icon name="search" size={32} color="#FFD700" />
          <Text style={styles.cardText}>Hire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Setting')}>
          <Icon name="cog" size={32} color="#FFD700" />
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Packages')}>
          <Icon name="archive" size={32} color="#FFD700" />
          <Text style={styles.cardText}>Packages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Project')}>
          <Icon name="lightbulb-o" size={32} color="#FFD700" />
          <Text style={styles.cardText}>Projects</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Hire" component={Hire} />
         <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="Project" component={Projects} />
      </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 25,
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    marginBottom: 25,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
    marginBottom: 25,
  },
  card: {
    width: 160,
    height: 130,
    backgroundColor: "#F8F8F8",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Home;
