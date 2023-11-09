import { StyleSheet, Text, View } from "react-native";

function UserProfileScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Profile!</Text>
    </View>
  );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});