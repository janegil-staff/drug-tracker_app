import { StyleSheet, Text, View } from "react-native";
import DisplayEntries from "../components/Entries/DisplayEntrires/DisplayEntries";

function EntryListScreen() {
  return <DisplayEntries />
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
