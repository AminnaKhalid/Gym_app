import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function WorkoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("AbsExercises")}>
        <View style={styles.section}>
          <Text style={styles.title}>Abs Workout</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("ShoulderExercises")}
      >
        <View style={styles.section}>
          <Text style={styles.title}>Shoulder Workout</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LegsExercises")}>
        <View style={styles.section}>
          <Text style={styles.title}>Legs Workout</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ChestExercises")}>
        <View style={styles.section}>
          <Text style={styles.title}>Chest Workout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#0F8DA9",
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
});
