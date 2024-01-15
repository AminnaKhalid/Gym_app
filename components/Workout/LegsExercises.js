import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Exercise = ({ imageSource }) => {
  const [isDone, setIsDone] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    } else if (timer === 0) {
      setIsDone(true);
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleStartStopClick = () => {
    setIsTimerRunning((prev) => !prev);
    setIsDone(false);
  };

  return (
    <View style={styles.gridContainer}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Animated.View style={[styles.contentContainer, { opacity: fadeAnim }]}>
        <Text style={styles.topHeading}>Legs Exercise</Text>
        <View style={styles.headerContainer}>
          <Text style={styles.repCount}>
            {timer === 0 ? "Done" : `${timer}s`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleStartStopClick}
          style={styles.startStopButton}
        >
          <Icon
            name={isTimerRunning ? "pause" : "play-arrow"}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        {isDone && (
          <View style={styles.doneContainer}>
            <Text style={styles.doneText}>Great job! Exercise completed.</Text>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default function AbsExercises() {
  const absImage = require("../assets/abs1.gif");
  const abspic = require("../assets/abs2.gif");
  const abspicc = require("../assets/abs3.gif");

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.pageHeading}>Workout Session</Text>
        <Exercise imageSource={absImage} />
        <View style={styles.marginBetweenContainers}></View>
        <Exercise imageSource={abspic} />
        <View style={styles.marginBetweenContainers}></View>
        <Exercise imageSource={abspicc} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2", // Lighter shade background
  },
  pageHeading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333", // Dark text color
    marginBottom: 20,
  },
  marginBetweenContainers: {
    height: 20,
  },
  gridContainer: {
    flexDirection: "row",
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff", // White background
  },
  topHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3498db", // Accent color
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  repCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db", // Accent color
  },
  startStopButton: {
    backgroundColor: "#e74c3c", // Red color
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  doneContainer: {
    marginTop: 20,
  },
  doneText: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
