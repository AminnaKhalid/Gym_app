import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import DietScreen from "./screens/DietScreen";
import SettingsScreen from "./screens/SettingsScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import AbsExercises from "./components/Workout/AbsExercises";
import ChestExercises from "./components/Workout/ChestExercises";
import LegsExercises from "./components/Workout/LegsExercises";
import ShoulderExercises from "./components/Workout/ShoulderExercises";
import DietPagesScreen from "./components/Dietscreen/DietPagesScreen";
import TipsScreen from "./components/Dietscreen/TipsScreen"; // Import TipsScreen
import FoodScreen from "./components/Dietscreen/FoodScreen";
import SupplementsScreen from "./components/Dietscreen/SupplementsScreen";
// import Login from "./screens/Login";
// import StackNavigator from "./StackNavigator";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WorkoutStack = () => (
  <Stack.Navigator>
    {/* <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="Workout"
      component={WorkoutScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AbsExercises"
      component={AbsExercises}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChestExercises"
      component={ChestExercises}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="LegsExercises"
      component={LegsExercises}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ShoulderExercises"
      component={ShoulderExercises}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DietScreen"
      component={DietScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="DietPagesScreen"
      component={DietPagesScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TipsScreen"
      component={TipsScreen} // Use the correct name for TipsScreen
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="FoodScreen"
      component={FoodScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SupplementsScreen"
      component={SupplementsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Diet") {
              iconName = focused ? "ios-nutrition" : "ios-nutrition-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            } else if (route.name === "Workout") {
              iconName = focused ? "ios-fitness" : "ios-fitness-outline";
            } else if (route.name === "Statistics") {
              iconName = focused ? "ios-stats" : "ios-stats-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Diet"
          options={{ headerShown: false }}
          component={DietScreen}
        />

        <Tab.Screen
          name="Workout"
          options={{ headerShown: false }}
          component={WorkoutStack}
        />
        <Tab.Screen
          name="Statistics"
          options={{ headerShown: false }}
          component={StatisticsScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{ headerShown: false }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
