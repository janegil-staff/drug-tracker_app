import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
function UserForm({ user }) {

    
  function nameChangedHandler() {

  }

  return (  
      <View>
        <Input
          label="Name"
          textInputConfig={{
            onChangeText: nameChangedHandler,
          }}
        />
      </View>
  )
}

export default UserForm;

const styles = StyleSheet.create({});
