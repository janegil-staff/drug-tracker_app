import { StyleSheet, Text, View } from "react-native";

function EntryListScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>New Entry</Text>
    </View>
  );
}

export default EntryListScreen;

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
