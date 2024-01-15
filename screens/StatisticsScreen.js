import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Dimensions, // Import Dimensions for responsiveness
} from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function StatisticsScreen({ navigation }) {
  // State variables to hold height, weight, and BMI result
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [bmiResult, setBMIResult] = React.useState(null);

  // State variable for water intake
  const [waterIntake, setWaterIntake] = React.useState("");

  // Function to calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightMeters = height / 100;
    const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);

    setBMIResult(bmi);
  };

  // Sample data for the chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(6, 147, 227, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  // Dimensions for responsiveness
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Statistics Screen</Text>

      {/* Previous Statistics Section */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Previous Statistics</Text>
        {/* Add content for previous statistics section */}
      </View>

      {/* Chart Section */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Workout Progress</Text>
        {/* Line Chart Component */}
        <LineChart
          data={data}
          width={screenWidth - 32} // Make the chart width responsive
          height={200}
          yAxisLabel=""
          chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            color: (opacity = 1) => `rgba(6, 147, 227, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(6, 147, 227, ${opacity})`,
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "#0693E3",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* BMI Calculator Section */}
      <View style={styles.bmiContainer}>
        <Text style={styles.bmiTitle}>BMI Calculator</Text>
        {/* Height Input */}
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        {/* Weight Input */}
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        {/* Calculate BMI Button */}
        <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </TouchableOpacity>
        {/* Display BMI Result */}
        {bmiResult !== null && (
          <Text style={styles.resultText}>Your BMI: {bmiResult}</Text>
        )}
      </View>

      {/* Water Intake Section */}
      <View style={styles.waterContainer}>
        <Text style={styles.waterTitle}>Water Intake</Text>
        {/* Water Intake Input */}
        <TextInput
          style={styles.input}
          placeholder="Water Intake (ml)"
          keyboardType="numeric"
          value={waterIntake}
          onChangeText={(text) => setWaterIntake(text)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  statsContainer: {
    marginBottom: 16,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  chartContainer: {
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bmiContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bmiTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  waterContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  waterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  calculateButton: {
    width: 150,
    height: 40,
    backgroundColor: "#0C6E83",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  resultText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
