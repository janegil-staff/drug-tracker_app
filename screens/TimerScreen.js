import { StyleSheet, Text, View } from "react-native";
import TimePreview from "../components/Entries/TimePreview/TimePreview";

function TimerScreen({route}) {
  return <TimePreview />
}

export default TimerScreen;

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
