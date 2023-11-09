import { StyleSheet, Text, View } from "react-native";

function AddEntryScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Add Entry!</Text>   
    </View>
  );
}

export default AddEntryScreen;

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
