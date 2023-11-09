import { View, StyleSheet} from "react-native";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Input from "../../Auth/Input";
import Button from "../../UI/Button";

function EntryForm() {
  const [enteredType, setEnteredType] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredPrice, setEnteredPrice] = useState();

  const changeValueHandler = (data) => {
    setEnteredType(data);
  };

  const submitHandler = () => {
    console.log(enteredType);
    console.log(enteredAmount);
    console.log(enteredPrice);
  }
  return (
    <View>
      <Dropdown
        value={enteredType}
        label="Select type"
        onChange={changeValueHandler}
      />
      <Input
        label="Amount"
        onUpdateValue={setEnteredAmount}
        value={enteredAmount}
        keyboardType="numeric"
        isInvalid={false}
      />
      <Input
        label="Price"
        onUpdateValue={setEnteredPrice}
        value={enteredPrice}
        keyboardType="numeric"
        isInvalid={false}
      />
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          Add Entry
        </Button>
      </View>
    </View>
  );
}

export default EntryForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});