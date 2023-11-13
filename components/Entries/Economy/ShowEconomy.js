import { ImageBackground, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { getTotalSum, getTotalValuesFromEntries } from "../../../util/helpers";

import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";
import { Colors } from '../../../constants/styles';
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient colors={['#1A237E','#C5CAE9']} style={styles.rootScreen}>
    <ImageBackground
      source={require("../../../assets/images/money.avif")}
      style={styles.rootScreen} resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
    <View style={styles.costContainer}>
      <View style={styles.costRow}>
        <Text style={[styles.costItem, styles.costHeader]}>Type</Text>
        <Text style={[styles.costItem, styles.costHeader]}>Amount</Text>
        <Text style={[styles.costItem, styles.costHeader]}>Cost</Text>
      </View>

      {hasEntries &&
        totalValues.map((val) => {
          return (
            <View key={val.id} style={styles.costRow}>
              <Text style={styles.costItem}>{val.type}</Text>
              <Text style={styles.costItem}>{val.totalAmount} {(val.type === 'Benzodiasapine' || val.type == 'Extasy') ? 'stk' : 'gr' }</Text>
              <Text style={styles.costItem}>{val.totalCost}.-</Text>
            </View>
          );
        })}
    </View>
    
    {hasEntries && 
    <Text style={styles.totalSum}>Total money spent: {getTotalSum(totalValues)}.-</Text>}
    </ImageBackground>
    </LinearGradient>
  );
}

export default ShowEconomy;

const styles = StyleSheet.create({
  costContainer: {
    marginVertical: 64
  },
  costHeader: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  costRow: {
    justifyContent: 'space-evenly',

    flexDirection: "row",
  
  },
  costItem: {
    flexBasis: "30%",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: Colors.primary200,
    backgroundColor: Colors.primary100
  },
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  },
  totalSum: {
    color: Colors.primary100,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24
  }

});
