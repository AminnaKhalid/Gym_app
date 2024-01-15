import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WorkoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DietPagesScreen")}
        >
          <View style={[styles.section, styles.darkBackground, styles.box]}>
            <Text style={styles.title}>Diet</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("TipsScreen")}>
          <View style={[styles.section, styles.darkBackground, styles.box]}>
            <Text style={styles.title}>Tips</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("FoodScreen")}>
          <View style={[styles.section, styles.darkBackground, styles.box]}>
            <Text style={styles.title}>Food</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SupplementsScreen")}
        >
          <View style={[styles.section, styles.darkBackground, styles.box]}>
            <Text style={styles.title}>Supplement</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  section: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Padding around the box
  },
  darkBackground: {
    backgroundColor: "#0e5a80",
  },
  box: {
    width: 200,
    height: 150,
    marginHorizontal: 10, // Adjust margin for spacing between boxes
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white", // Text color
  },
});
