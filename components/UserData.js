import { View, Text } from "react-native";
const UserData = ({ name, age, gmail }) => {
  return (
    <View>
      <Text style={{ fontSize: 40, marginTop: 40 }}> Component 1</Text>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{gmail}</Text>
    </View>
  );
};

export default UserData;
