// FoodScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function FoodScreen() {
  // Example list of foods with their calorie information
  const foodList = [
    { name: "Milk", calories: 42 },
    { name: "Apple", calories: 52 },
    { name: "Chicken Breast", calories: 165 },
    { name: "Broccoli", calories: 55 },
    { name: "Brown Rice", calories: 111 },
    { name: "Salmon", calories: 206 },
    { name: "Spinach", calories: 23 },
    { name: "Banana", calories: 89 },
    { name: "Almonds", calories: 7 },
    { name: "Olive Oil", calories: 119 },
  ];

  return (
    <View style={styles.container}>
      {/* Heading above the foods */}
      <Text style={styles.heading}>Food Information</Text>

      {/* Use ScrollView to enable scrolling of the content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Food list container */}
        <View style={styles.foodListContainer}>
          {/* List of foods on the right */}
          <View style={styles.foodList}>
            {foodList.map((food, index) => (
              <View key={index} style={styles.foodItem}>
                <MaterialIcons
                  name="restaurant"
                  size={24}
                  color="#0e5a80"
                  style={styles.icon}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.foodName}>{food.name}</Text>
                  <Text style={styles.caloriesText}>
                    {food.calories} kcal per 100g
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F8DA9", // Whole background color
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  foodListContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    margin: 20,
    width: 400, // Set the width in pixels
  },
  foodList: {
    flex: 1,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  caloriesText: {
    fontSize: 14,
    color: "#555555", // Medium text color
  },
});
