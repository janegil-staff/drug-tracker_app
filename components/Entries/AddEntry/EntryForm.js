import { View, StyleSheet, Alert} from "react-native";
import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import Input from "../../Auth/Input";
import Button from "../../UI/Button";
import axios from "axios";
import { AuthContext } from "../../../store/auth-context";
import { API_URL } from "../../../constants/http";

function EntryForm() {
  const auth = useContext(AuthContext);
  const [enteredType, setEnteredType] = useState();
  const [enteredAmount, setEnteredAmount] = useState();
  const [enteredPrice, setEnteredPrice] = useState();

  const changeValueHandler = (data) => {
    setEnteredType(data);
  };

  const clearForm = () => {
    setEnteredAmount('');
    setEnteredPrice('');
  }

  const isValid = () => {
   if(!enteredType || enteredType.length < 1 || isNaN(enteredAmount) || isNaN(enteredPrice)) {
      return false;
    }  
    return true;
  }

  const submitHandler = async () => {
    if(!isValid()) {
      Alert.alert('Not all values is set', 'You have to add values to all the fields!');
      return;
    }
    let data = JSON.stringify({
      type: enteredType,
      amount: enteredAmount,
      price: enteredPrice,
    });

    let url = `${API_URL}/entries`;
    try{
      const response = await axios.post(url, data, {
        headers: {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        },
      }); 
      clearForm();
      Alert.alert('SUCCESS', 'A new entry was created.')
    }catch (err) {
      Alert.alert('Something went wrong', 'No new entry added!')
    }
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