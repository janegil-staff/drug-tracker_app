import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { getTotalValuesFromEntries } from "../../../util/helpers";

import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";
import DataTable, { COL_TYPES } from "react-native-data-table";

function ShowEconomy() {
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
  let totalValues = [];
  if (loadedEntries && loadedEntries.length > 0) {
    totalValues = getTotalValuesFromEntries(loadedEntries);
    hasEntries = true;
  }

  return (
    <View>
      <View style={styles.costs}>
        <Text style={styles.costItem}>Type</Text>
        <Text style={styles.costItem}>Amount</Text>
        <Text style={styles.costItem}>Cost</Text>
      </View>
      {hasEntries &&
        totalValues.map((val) => {
          return (
            <View style={styles.costs}>
              <Text style={styles.costItem}>{val.type}</Text>
              <Text style={styles.costItem}>{val.totalAmount}</Text>
              <Text style={styles.costItem}>{val.totalCost}</Text>
            </View>
          );
        })}
    </View>
  );
}

export default ShowEconomy;

const styles = StyleSheet.create({
  costs: {
    flexDirection: "row",
  },
  costItem: {
    flexBasis: "33.3333333%",
  },
});
