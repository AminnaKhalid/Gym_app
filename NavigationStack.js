import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DietScreen from "./screens/DietScreen";
import TipsScreen from "./components/Dietscreen/TipsScreen";
import SupplementsScreen from "./components/Dietscreen/SupplementsScreen";
import FoodScreen from "./components/Dietscreen/FoodScreen";
import DietPagesScreen from "./components/Dietscreen/DietPagesScreen";
import { Ionicons } from "@expo/vector-icons"; // Import appropriate icon library
import AbsExercises from "./screens/AbsExercises";
import ShoulderExercises from "./screens/ShoulderExercises";
const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Diet"
          component={DietScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-restaurant" size={size} color={color} /> // Change icon and its name here
            ),
          }}
        />
        <Stack.Screen
          name="Tips"
          component={TipsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ios-information-circle"
                size={size}
                color={color}
              /> // Change icon and its   name here
            ),
          }}
        />
        <Stack.Screen
          name="Supplements"
          component={SupplementsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-medical" size={size} color={color} /> // Change icon and its name here
            ),
          }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ios-restaurant-outline"
                size={size}
                color={color}
              /> // Change icon and its name here
            ),
          }}
        />
        <Stack.Screen
          name="DietPages"
          component={DietPagesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-bookmarks" size={size} color={color} /> // Change icon and its name here
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
