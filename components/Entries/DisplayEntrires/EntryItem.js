import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../../constants/styles";
import { getFormatedDate } from "../../../util/date";
import { useNavigation } from "@react-navigation/native";

function EntryItem({entry}) {
const {type, amount, price, createdAt} = entry;
const navigation = useNavigation();
  
  function entryPressedHandler() {
    navigation.navigate('EditDetailsScreen', {
     entry: entry
    })
  }

  let date = getFormatedDate(new Date(createdAt));
  const prependValue = type === ('Benzodiasapine' || type === 'Extracy') ? 'stk' : 'gr';
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={entryPressedHandler}>
      <View style={styles.entryItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{type}</Text>
          <Text style={styles.textBase}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount} {prependValue}</Text>
          <Text style={styles.amount}>{price.toFixed(2)}.-</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default EntryItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75
  },
  entryItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray700,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
