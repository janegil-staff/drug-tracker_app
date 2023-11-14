import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View,StyleSheet } from "react-native";
import { AuthContext } from "../../../store/auth-context";
import axios from "axios";
import { API_URL } from "../../../constants/http";
import EntryItem from "./EntryItem";
import { Colors } from "../../../constants/styles";

function renderEntryItem(itemData) {
  return <EntryItem entry={itemData.item} />
}

function DisplayEntries() {
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
          });
      } catch (err) {
        console.log("An error has occured", err);
      }
    };
    fetchEntries();
  }, []);

  let hasEntries = false;

  if (loadedEntries && loadedEntries.length > 0) {
    hasEntries = true;
  }

  return (
    <View style={styles.container}>
      {hasEntries && (
        <FlatList
          data={loadedEntries}
          renderItem={renderEntryItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

export default DisplayEntries;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary700
  }
})