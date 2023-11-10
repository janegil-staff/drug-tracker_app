import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import axios from "axios";

import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";
import Timer from "./Timer";
import { MONTHS } from "../../../constants/months";
import { LinearGradient } from "expo-linear-gradient";

function TimePreview() {
  const [loadedEntries, setLoadedEntries] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        let url = `${API_URL}/entries`;
        await axios
          .get(url, {
            headers: {
              Authorization: "Bearer " + auth.token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoadedEntries(response.data.entries);
            console.log("Entries", loadedEntries);
          });
      } catch (err) {
        console.log("An error has occured", err);
      }
    };
    fetchEntries();
  }, []);

  let hasEntries = false;
  let latestEntryDate;
  let totalValues = [];
  if (loadedEntries && loadedEntries.length > 0) {
    hasEntries = true;
    latestEntryDate = loadedEntries[0].createdAt;
  }

  return (
    <LinearGradient colors={["#42A5F5", "#E3F2FD"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("../../../assets/images/pills4.avif")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        {hasEntries && (
          <View style={styles.timerContainer}>
            <Text style={styles.counter}>
              <Timer callQueuedTime={latestEntryDate} />
            </Text>
            <View>
              <Text style={styles.date}>
                Last entry was {new Date(latestEntryDate).getDate()}.{" "}
                {MONTHS[new Date(latestEntryDate).getMonth()]}
                {new Date(latestEntryDate).getFullYear()}
              </Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}

export default TimePreview;

const styles = StyleSheet.create({
  timerContainer: {
    marginTop: 30,
  },
  counter: {
    fontSize: 32,
    textAlign: "center",
    marginVertical: 50,
  },
  date: {
    textAlign: "center",
  },
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.2
  }
});
