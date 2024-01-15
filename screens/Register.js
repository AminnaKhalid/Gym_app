import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Alert } from "react-native";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred during registration"
        );
        console.log("error", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../assets/mainlogo.png")} />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Sign up
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderRadius: 5,
              paddingVertical: 5,
              borderWidth: 1,
              paddingLeft: 5,
              width: 250,
            }}
          >
            <Ionicons name="person-circle" size={24} color="black" />
            <TextInput
              value={name}
              style={{
                marginVertical: 3,
                width: 150,
                color: "gray",
                fontSize: name ? 16 : 16,
              }}
              onChangeText={(value) => setName(value)}
              placeholder="enter your name"
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderRadius: 5,
              paddingVertical: 5,
              borderWidth: 1,
              paddingLeft: 5,
            }}
          >
            <MaterialIcons name="email" size={24} color="black" />
            <TextInput
              value={email}
              style={{
                marginVertical: 3,
                width: 150,

                color: "gray",
                fontSize: email ? 16 : 16,
              }}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderRadius: 5,
              paddingVertical: 5,
              borderWidth: 1,
              paddingLeft: 5,
            }}
          >
            <FontAwesome name="lock" size={24} color="black" />
            <TextInput
              value={password}
              style={{
                marginVertical: 3,
                width: 150,

                color: "gray",
                fontSize: password ? 16 : 16,
              }}
              onChangeText={(text) => setPassword(text)}
              placeholder="enter your password"
            />
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 12,
            }}
          >
            <Text>Keep me logged in</Text>
            <Text style={{ fontWeight: 500, color: "#0c3685" }}>
              forgot passowrd
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 45 }}>
          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
              }}
            >
              Sign In
            </Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ textAlign: "center", fontWeight: 16 }}>
              Already have an account ? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F8DA9",
    flex: 1,
    alignItems: "center",
  },

  logo: {
    width: 400, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain",
  },
});
