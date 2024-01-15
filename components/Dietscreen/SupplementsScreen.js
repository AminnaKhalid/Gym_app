// SupplementsScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";

// Import the background image
const backgroundImage = require("../assets/supplements.jpg");
// Import placeholder medicine images
const medicineImage1 = require("../assets/sup1.webp");
const medicineImage2 = require("../assets/sup2.webp");

export default function SupplementsScreen() {
  return (
    // Use ImageBackground to set the background image
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {/* Heading above the supplements */}
      <Text style={styles.heading}>Supplements</Text>

      {/* Use ScrollView to enable scrolling of the content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* First medicine container */}
        <View style={styles.medicineContainer}>
          {/* Medicine image on the left */}
          <Image source={medicineImage1} style={styles.medicineImage} />

          {/* Description of the medicine on the right */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.medicineName}>VitaBoost+</Text>
            <Text style={styles.medicineDescription}>
              VitaBoost+ is a comprehensive multivitamin supplement designed to
              support overall health and well-being. It contains essential
              vitamins, minerals, and antioxidants that contribute to improved
              energy levels, immune function, and skin health. Incorporate
              VitaBoost+ into your daily routine for a healthy and vibrant
              lifestyle.
            </Text>
          </View>
        </View>

        {/* Second medicine container */}
        <View style={styles.medicineContainer}>
          {/* Medicine image on the left */}
          <Image source={medicineImage2} style={styles.medicineImage} />

          {/* Description of the medicine on the right */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.medicineName}>OmegaWell</Text>
            <Text style={styles.medicineDescription}>
              OmegaWell is a high-quality omega-3 fatty acid supplement sourced
              from pure fish oil. It provides essential fatty acids, including
              EPA and DHA, known for their cardiovascular and cognitive
              benefits. OmegaWell supports heart health, brain function, and
              joint flexibility. Make OmegaWell a part of your daily routine for
              overall wellness.
            </Text>
          </View>
        </View>

        {/* Add more medicine containers as needed */}
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000", // Black text color
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  medicineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  medicineImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  descriptionContainer: {
    flex: 1,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333", // Dark text color
  },
  medicineDescription: {
    fontSize: 16,
    color: "#555555", // Medium text color
  },
});
