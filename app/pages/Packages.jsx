import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const packages = [
  {
    title: "Basic (For Startups)",
    price: "$1,299",
    services: [
      { name: "UI/UX Consultation", value: "✅ Free" },
      { name: "Mobile App UI Design (5 screens)", value: "✅ Free" },
      { name: "Landing Page Design", value: "✅ Free" },
      { name: "Wireframing & Prototyping", value: "$99" },
      { name: "User Research & Persona Creation", value: "$49" },
      { name: "Usability Testing & Audit", value: "$129" },
      { name: "Dashboard UI Design", value: "$129" },
      { name: "Ecommerce UI Design (5 pages)", value: "$199" },
      { name: "SaaS Product UX Design", value: "$249" },
      { name: "Enterprise Software UX Redesign", value: "$349" },
      { name: "Design System & Style Guide", value: "$99" },
    ],
  },
  {
    title: "Optimal (For MSMEs)",
    price: "$2,499",
    services: [
      { name: "UI/UX Consultation", value: "✅ Free" },
      { name: "Website UI Design (5 pages)", value: "✅ Free" },
      { name: "Mobile App UI Design (5 screens)", value: "✅ Free" },
      { name: "Landing Page Design", value: "✅ Free" },
      { name: "Wireframing & Prototyping", value: "✅ Free" },
      { name: "User Research & Persona Creation", value: "✅ Free" },
      { name: "Usability Testing & Audit", value: "✅ Free" },
      { name: "Dashboard UI Design", value: "$349" },
      { name: "Ecommerce UI Design (5 pages)", value: "$499" },
      { name: "SaaS Product UX Design", value: "$699" },
      { name: "Enterprise Software UX Redesign", value: "$999" },
      { name: "Design System & Style Guide", value: "$299" },
    ],
  },
  {
    title: "Premium (For Enterprises)",
    price: "$4,999",
    services: [
      { name: "UI/UX Consultation", value: "✅ Free" },
      { name: "Website UI Design (5 pages)", value: "✅ Free" },
      { name: "Mobile App UI Design (5 screens)", value: "✅ Free" },
      { name: "Landing Page Design", value: "✅ Free" },
      { name: "Wireframing & Prototyping", value: "✅ Free" },
      { name: "User Research & Persona Creation", value: "✅ Free" },
      { name: "Usability Testing & Audit", value: "✅ Free" },
      { name: "Dashboard UI Design", value: "✅ Free" },
      { name: "Ecommerce UI Design (5 pages)", value: "✅ Free" },
      { name: "SaaS Product UX Design", value: "$1,999" },
      { name: "Enterprise Software UX Redesign", value: "$2,499" },
      { name: "Design System & Style Guide", value: "$799" },
    ],
  },
];

const PackageCard = ({ title, price, services }) => {
  const handleSubscribe = () => {
    console.log(`Subscribed to ${title}`);
    alert(`You have subscribed to the ${title} package!`);
  };

  return (
    <View style={styles.packageCard}>
      <Text style={styles.packageTitle}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.serviceRow}>
            <Icon name="check-circle" size={16} color="#FFD700" style={styles.icon} />
            <Text style={styles.serviceText}>{item.name}</Text>
            <Text style={styles.serviceValue}>{item.value}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
        <Text style={styles.subscribeText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const Packages = () => {
  return (
    <FlatList
      style={styles.container}
      data={packages}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <PackageCard title={item.title} price={item.price} services={item.services} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  packageCard: {
    backgroundColor: "#F8F8F8",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 10,
  },
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  icon: {
    marginRight: 8,
  },
  serviceText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  serviceValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  subscribeButton: {
    backgroundColor: "#FFD700",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  subscribeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default Packages;