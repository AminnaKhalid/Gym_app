import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share,
  Switch,
} from "react-native";

export default function SettingsScreen() {
  const [notificationEnabled, setNotificationEnabled] = React.useState(false);

  const handleLogout = () => {
    // Handle logout logic here
    // For example: sign out the user, clear session data, etc.
    console.log("Logout functionality");
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this awesome gym app!",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNotificationToggle = () => {
    setNotificationEnabled((prevState) => !prevState);
    // Update notification settings in the backend or locally
  };

  const handleChangePassword = () => {
    // Handle change password functionality
    console.log("Change password functionality");
  };

  const handleContactSupport = () => {
    // Handle contact support functionality
    console.log("Contact support functionality");
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingContainer}>
        <Text style={styles.settingTitle}>Notifications</Text>
        <Switch
          value={notificationEnabled}
          onValueChange={handleNotificationToggle}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Share with Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContactSupport}>
        <Text style={styles.buttonText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#E8EAED",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#0C6E83",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
