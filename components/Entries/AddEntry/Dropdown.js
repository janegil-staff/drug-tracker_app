import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Colors } from '../../../constants/styles';
import { StyleSheet, View, Text } from "react-native";

function Dropdown({ onChange, label }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Canabis", value: "Canabis" },
    { label: "Amphetamine", value: "Amphetamine" },
    { label: "Benzodiasapine", value: "Benzodiasapine" },
    { label: "Extasy", value: "Extasy" },
    { label: "Ketamine", value: "Ketamine" },
    { label: "Acid", value: "Acid" },
    { label: "Heroine", value: "Heroine" },
  ]);

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label]}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={onChange}
        style={styles.input}
      />
    </View>
  );
}

export default Dropdown;
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    zIndex: 100
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
