import { ImageBackground, StyleSheet, View } from "react-native";

import { Colors } from "../../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";

import EntryForm from "./EntryForm";
function NewEntry() {
  return <LinearGradient colors={["#1A237E", "#C5CAE9"]} style={styles.rootScreen}>
    <ImageBackground
      source={require("../../../assets/images/pills.avif")}
      style={styles.rootScreen}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.authContent}>
      <EntryForm />
      </View>
      
    </ImageBackground>
  </LinearGradient>
}

export default NewEntry;
const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
