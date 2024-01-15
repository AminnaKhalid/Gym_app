// DietPagesScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

// Import the background image
const backgroundImage = require("../assets/wholebg.jpg");

export default function DietPagesScreen() {
  const dietTips = [
    "Eat a variety of fruits and vegetables.",
    "Include whole grains in your diet.",
    "Limit processed and sugary foods.",
    "Stay hydrated by drinking plenty of water.",
    "Control portion sizes to avoid overeating.",
    "Balance your meals with proteins, carbohydrates, and fats.",
    "Limit salt and sodium intake.",
    "Avoid skipping meals.",
    "Listen to your body's hunger and fullness cues.",
    "Plan your meals ahead for healthier choices.",
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Diet Tips</Text>
        {dietTips.map((tip, index) => (
          <View key={index} style={styles.tipContainer}>
            <Text style={styles.tipText}>{tip}</Text>
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
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333", // Dark text color
  },
  tipContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white container
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    width: "100%", // Take the full width
  },
  tipText: {
    fontSize: 16,
    color: "#555555", // Medium text color
  },
});
