// TipsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Import the background image
const backgroundImage = require("../assets/tips.jpg");

export default function TipsScreen() {
  // Healthy lifestyle tips with corresponding icons
  const tips = [
    { text: "Stay hydrated", icon: "local-drink" },
    { text: "Eat fruits and vegetables", icon: "eco" },
    { text: "Exercise regularly", icon: "directions-run" },
    { text: "Get enough sleep", icon: "hotel" },
    { text: "Limit processed foods", icon: "fastfood" },
    { text: "Manage stress", icon: "mood" },
    { text: "Maintain a balanced diet", icon: "restaurant" },
    { text: "Avoid smoking", icon: "smoking-rooms" },
    { text: "Build healthy relationships", icon: "group" },
    { text: "Practice good posture", icon: "accessibility" },
  ];

  return (
    // Use ImageBackground to set the background image
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {/* Heading above the tips */}
      <Text style={styles.heading}>Tips for Healthy Diet</Text>

      {/* Use ScrollView to enable scrolling of the content */}
      <ScrollView contentContainerStyle={styles.container}>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipContainer}>
            {/* Icon on the left */}
            <MaterialIcons
              name={tip.icon}
              size={40}
              color="#0e5a80"
              style={styles.icon}
            />

            {/* Tip text on the right */}
            <Text style={styles.tipText}>{tip.text}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000", // White text color
    marginBottom: 20, // Added margin below heading
  },
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "stretch", // Align items to the center
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  icon: {
    marginRight: 15,
  },
  tipText: {
    flex: 1,
    fontSize: 16,
    color: "#000000",
  },
});
