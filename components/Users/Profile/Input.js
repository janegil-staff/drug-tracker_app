import { TextInput, View } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <View>{label}</View>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;
