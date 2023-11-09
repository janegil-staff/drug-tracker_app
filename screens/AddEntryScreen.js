import { StyleSheet, Text, View } from "react-native";
import NewEntry from "../components/Entries/AddEntry/NewEntry";

function AddEntryScreen() {
  return (
    <NewEntry />
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
