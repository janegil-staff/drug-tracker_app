import { StyleSheet, Text, View } from "react-native";
import ShowEconomy from "../components/Entries/Economy/ShowEconomy";

function EconomyScreen() {
  return <ShowEconomy />
}

export default EconomyScreen;

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