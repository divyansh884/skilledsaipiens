import React from "react";
import  { createBottomTabNavigator }  from "@react-navigation/bottom-tabs";
import  { NavigationContainer }  from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./(tabs)/HomeScreen";
import NotificationsScreen from "./(tabs)/Notification";
import MoreOptionsScreen from "./(tabs)/More";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Notifications") {
              iconName = "bell";
            } else if (route.name === "More") {
              iconName = "ellipsis-h";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="More" component={MoreOptionsScreen} />
      </Tab.Navigator>
    
  );
}

const Index = () => {
  return <MyTabs />;
};

export default Index;
